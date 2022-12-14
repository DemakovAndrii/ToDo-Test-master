import * as React from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import BackArow from "../../icons/BackArow";
import Palette from "../../styles/Palette";
import { useNavigation } from "@react-navigation/native";

function CustomBackButtom() {
	const navigation = useNavigation();
	const scheme = useColorScheme() === "dark";
	const color = scheme ? Palette.darkTh.text : Palette.lightTh.text;

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("Home")}
			style={{
				flex: 1,
				flexDirection: "row",
				alignItems: "center",
			}}
		>
			<BackArow color={color} />
			<Text style={{ fontSize: 18, marginLeft: 5, color: color }}>Back</Text>
		</TouchableOpacity>
	);
}

export default CustomBackButtom;
