import React, {useState} from 'react';
import {Button, Modal, useColorScheme, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Palette from '../styles/Palette';

const customCalendar = props => {
  const scheme = useColorScheme() === 'dark';

  const [openModal, setOpenModal] = useState(!false);

  const closeModal = () => {
    console.log('close');
    setOpenModal(false);
  };

  return (
    <Modal visible={openModal} transparent={true} animationType="fade">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 40,
          backgroundColor: 'rgba(100, 100, 100, 0.6)',
        }}>
        <Calendar
          disableAllTouchEventsForDisabledDays={true}
          {...props}
          style={{
            borderRadius: 5,
            margin: 12,
            elevation: 5,
            borderWidth: 4,
            borderColor: 'rgba(100, 100, 100, 0.2)',
          }}
          theme={{
            calendarBackground: scheme
              ? Palette.darkTh.backGround
              : Palette.lightTh.backGround,
            dayTextColor: scheme ? Palette.darkTh.text : Palette.lightTh.text,
            textDisabledColor: scheme ? '#555' : '#999',
            monthTextColor: scheme ? Palette.darkTh.text : Palette.lightTh.text,
          }}
        />
      </View>
      <Button title="close" onPress={closeModal} />
    </Modal>
  );
};

export default customCalendar;
