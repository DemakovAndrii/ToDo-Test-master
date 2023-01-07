import React, {useRef, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import TaskCard from './TaskCard';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const AllTaskList = () => {
  const data = new Date();
  const day = data.getDate();

  const allTasks = useSelector((state: RootState) => state.counter.tasks);
  const todayTask = allTasks.filter(el => el.selectDay === day);

  const scrollRef = useRef(null);

  return (
    <View>
      <FlatList
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        renderItem={({item}) => (
          <TaskCard {...item} simultaneousHandlers={scrollRef} />
        )}
        data={todayTask}
      />
    </View>
  );
};

export default AllTaskList;
