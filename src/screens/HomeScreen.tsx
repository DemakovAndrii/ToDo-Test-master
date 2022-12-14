import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	Text,
	View,
	useColorScheme,
	Button,
} from "react-native";
import AllTaskList from "../components/AllTaskList";
import CustomPlusButtom from "../components/custom/CustomPlusButtom";
import TopCalendar from "../components/TopCalendar";
import Palette from "../styles/Palette";
import { useDispatch } from "react-redux";
import { getStorageTasks } from "../redux/counterSlice";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
	const scheme = useColorScheme() === "dark";
	const bgStyle = {
		backgroundColor: scheme
			? Palette.darkTh.backGround
			: Palette.lightTh.backGround,
	};

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getStorageTasks() as any);
	}, []);

	return (
		<>
			<SafeAreaView
				style={{
					backgroundColor: bgStyle.backgroundColor,
				}}
			>
				<StatusBar
					backgroundColor={bgStyle.backgroundColor}
					showHideTransition={"slide"}
					barStyle={scheme ? "light-content" : "dark-content"}
				/>

				<View
					style={{
						position: "absolute",
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
					}}
				>
					<View
						style={{ position: "absolute", left: 300, top: 660, zIndex: 1 }}
					>
						<CustomPlusButtom />
					</View>
				</View>
				<TopCalendar />
				<View style={{ paddingHorizontal: 10, paddingTop: 15, height: 500 }}>
					<AllTaskList />
				</View>
			</SafeAreaView>
		</>
	);
};

export default Home;

