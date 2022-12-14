import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	useColorScheme,
	SafeAreaView,
	StatusBar,
	Button,
	StyleSheet,
	Alert,
	Modal,
	Pressable,
} from "react-native";
import Palette from "../styles/Palette";
import CustomInput from "../components/custom/CustomInput";
import CustomAddTaskButtom from "../components/custom/CustomAddTaskButtom";
import { useDispatch } from "react-redux";
import { add } from "../redux/counterSlice";
import allTask from "../data/allTask.json";
import { useNavigation } from "@react-navigation/native";

const CreateTaskScreen = () => {
	const scheme = useColorScheme() === "dark";
	const bgStyle = {
		backgroundColor: scheme
			? Palette.darkTh.backGround
			: Palette.lightTh.backGround,
	};

	const data = new Date();
	const year = data.getFullYear();
	const month = data.getMonth();
	const day: number = data.getDate();

	const navigation = useNavigation();
	const dispatch = useDispatch();

	const [value, setValue] = useState("");

	const [modalVisible, setModalVisible] = useState(false);

	const addTask = () => {
		if (value !== "") {
			allTask.push({ date: day, task: value });
			dispatch(add({ day, task: value }));
		}
		setValue("");

		setTimeout(() => {
			setModalVisible(true);
		}, 500);

		setTimeout(() => {
			setModalVisible(false);
			navigation.navigate("Home");
		}, 3000);
	};

	return (
		<SafeAreaView
			style={{
				backgroundColor: bgStyle.backgroundColor,
				paddingHorizontal: 10,
				height: "100%",
			}}
		>
			<StatusBar
				backgroundColor={bgStyle.backgroundColor}
				showHideTransition={"slide"}
				barStyle={scheme ? "light-content" : "dark-content"}
			/>
			<Text
				style={{
					color: scheme ? Palette.darkTh.text : Palette.lightTh.text,
					fontSize: 28,
				}}
			>
				task
			</Text>
			<CustomInput setValue={setValue} value={value} />
			<Text
				style={{
					color: scheme ? Palette.darkTh.text : Palette.lightTh.text,
					fontSize: 28,
				}}
			>
				date
			</Text>
			<Text
				style={{
					color: scheme ? Palette.darkTh.text : Palette.lightTh.text,
					fontSize: 28,
					paddingBottom: 50,
				}}
			>
				{day}
			</Text>
			<CustomAddTaskButtom text="Add Task" onPress={addTask} />
			<View style={styles.centeredView}>
				<Modal animationType="fade" transparent={true} visible={modalVisible}>
					<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Your shit is added</Text>
						</View>
					</View>
				</Modal>
			</View>
		</SafeAreaView>
	);
};

export default CreateTaskScreen;

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
		color: "red",
	},
});
