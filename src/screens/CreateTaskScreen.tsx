import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Modal,
} from 'react-native';
import Palette from '../styles/Palette';
import CustomInput from '../components/custom/CustomInput';
import CustomAddTaskButtom from '../components/custom/CustomAddTaskButtom';
import {useDispatch} from 'react-redux';
import {add} from '../redux/counterSlice';
import {useNavigation} from '@react-navigation/native';
import CustomCalendar from '../components/CustomCalendar';

const CreateTaskScreen = () => {
  const scheme = useColorScheme() === 'dark';
  const themeStyle = {
    backgroundColor: scheme
      ? Palette.darkTh.backGround
      : Palette.lightTh.backGround,
    color: scheme ? Palette.darkTh.text : Palette.lightTh.text,
  };

  const data = new Date();
  // const year = data.getFullYear()
  // const month = data.getMonth()
  const day: number = data.getDate();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [selectDay, setSelectDay] = useState(day);

  const [modalVisible, setModalVisible] = useState(false);

  const addTask = () => {
    if (value !== '') {
      dispatch(add({selectDay, task: value}));

      setValue('');

      setModalVisible(true);

      setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('Home');
      }, 1000);
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.safeAreaView,
        {backgroundColor: themeStyle.backgroundColor},
      ]}>
      <StatusBar
        backgroundColor={themeStyle.backgroundColor}
        showHideTransition={'slide'}
        barStyle={scheme ? 'light-content' : 'dark-content'}
      />
      <Text
        style={[
          styles.text,
          {
            color: themeStyle.color,
          },
        ]}>
        task
      </Text>
      <CustomInput setValue={setValue} value={value} />
      <Text
        style={[
          styles.text,
          {
            color: themeStyle.color,
          },
        ]}>
        date
      </Text>
      <Text style={[styles.date, {color: themeStyle.color}]}>{selectDay}</Text>
      <CustomAddTaskButtom text="Add Task" onPress={addTask} />
      <CustomCalendar onDayPress={day => setSelectDay(day.day)} />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalPosition}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Your task is added</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CreateTaskScreen;

const styles = StyleSheet.create({
  safeAreaView: {paddingHorizontal: 10, height: '100%'},
  text: {fontSize: 28, paddingBottom: 10},
  date: {fontSize: 28, paddingBottom: 50},

  modalPosition: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    // shadowColor: "#000",
    // shadowOffset: {
    // 	width: 0,
    // 	height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  modalText: {
    marginBottom: 18,
    textAlign: 'center',
    color: '#67B8F0',
    fontSize: 20,
  },
});
