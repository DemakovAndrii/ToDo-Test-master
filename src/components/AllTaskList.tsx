import React from "react";
import allTask from "../data/allTask.json";
import { FlatList, View, Text } from "react-native";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AllTaskList = () => {
	const data = new Date();
	const day = data.getDate();

	const allTasks = useSelector((state: RootState) => state.counter.tasks);
	const todayTask = allTasks.filter((el) => el.day === day);

	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			scrollEnabled={true}
			renderItem={({ item }) => <TaskCard {...item} />}
			data={todayTask}
		/>
	);
};

export default AllTaskList;
