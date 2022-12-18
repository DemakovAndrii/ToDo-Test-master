import React, {useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import TaskCard from './TaskCard';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const AllTaskList = () => {
  const data = new Date();
  const day = data.getDate();

  const allTasks = useSelector((state: RootState) => state.counter.tasks);
  const todayTask = allTasks.filter(el => el.selectDay === day);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        renderItem={({item}) => <TaskCard {...item} />}
        data={todayTask}
      />
    </View>
  );
};

export default AllTaskList;
