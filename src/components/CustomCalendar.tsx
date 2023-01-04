import React from 'react';
import {Modal, useColorScheme, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Palette from '../styles/Palette';

const customCalendar = ({visible, onDateSelected}) => {
  const scheme = useColorScheme() === 'dark';

  return (
    <>
      <Modal visible={visible} transparent={true} animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: scheme
              ? 'rgba(10, 10, 10, 0.5)'
              : 'rgba(0,0, 0, 0)',
          }}>
          <Calendar
            disableAllTouchEventsForDisabledDays={true}
            firstDay={1}
            style={{
              borderRadius: 15,
              margin: 30,
            }}
            theme={{
              calendarBackground: scheme
                ? Palette.darkTh.cardColor
                : Palette.lightTh.cardColor,
              dayTextColor: scheme ? Palette.darkTh.text : Palette.lightTh.text,
              textDisabledColor: scheme ? '#555' : '#999',
              monthTextColor: scheme
                ? Palette.darkTh.text
                : Palette.lightTh.text,
              arrowColor: scheme ? Palette.darkTh.text : Palette.lightTh.text,
              selectedDayBackgroundColor: '#51D8D0',
            }}
            onDayPress={onDateSelected}
          />
        </View>
      </Modal>
    </>
  );
};

export default customCalendar;
