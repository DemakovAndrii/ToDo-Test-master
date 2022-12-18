import React, {useState} from 'react';
import {
  Modal,
  useColorScheme,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Palette from '../styles/Palette';

const customCalendar = props => {
  const scheme = useColorScheme() === 'dark';
  const [calendarModal, setCalendarModalModal] = useState(!false);

  const closeModal = () => {
    setCalendarModalModal(false);
  };

  const data = new Date();
  const day: number = data.getDate();

  const [testDate, setTestDate] = useState(day);
  return (
    <>
      <Modal visible={calendarModal} transparent={true} animationType="fade">
        <TouchableOpacity
          // onPress={closeModal}
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(218, 14, 14, 0.3)',
          }}>
          <Calendar
            disableAllTouchEventsForDisabledDays={true}
            {...props}
            style={{
              borderRadius: 15,
              margin: 12,
              elevation: 5,
            }}
            theme={{
              calendarBackground: scheme
                ? Palette.darkTh.backGround
                : Palette.lightTh.backGround,
              dayTextColor: scheme ? Palette.darkTh.text : Palette.lightTh.text,
              textDisabledColor: scheme ? '#555' : '#999',
              monthTextColor: scheme
                ? Palette.darkTh.text
                : Palette.lightTh.text,
              arrowColor: 'red',
              selectedDayBackgroundColor: 'red',
            }}
            onDayPress={day => setTestDate(day.day)}
          />
          <Button title="close" onPress={closeModal} />
          <Text style={{fontSize: 24, color: 'white'}}>{testDate}</Text>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default customCalendar;
