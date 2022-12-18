import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import AllTaskList from '../components/AllTaskList';
import CustomPlusButtom from '../components/custom/CustomPlusButtom';
import TopCalendar from '../components/TopCalendar';
import Palette from '../styles/Palette';
import {useDispatch} from 'react-redux';
import {getStorageTasks} from '../redux/counterSlice';

const Home = () => {
  const scheme = useColorScheme() === 'dark';
  const themeStyle = {
    backgroundColor: scheme
      ? Palette.darkTh.backGround
      : Palette.lightTh.backGround,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStorageTasks() as any);
  }, [dispatch]);

  return (
    <>
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
        <View style={styles.buttonContainer}>
          <CustomPlusButtom />
        </View>
        <TopCalendar />
        <View style={styles.taskList}>
          <AllTaskList />
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    right: '5%',
    bottom: '5%',
    zIndex: 1,
  },
  taskList: {paddingHorizontal: 10, paddingTop: 15},
});

export default Home;
