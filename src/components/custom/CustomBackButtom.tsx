import * as React from "react";
import {
	Text,
	TouchableOpacity,
	useColorScheme,
	StyleSheet,
} from "react-native";
import BackArow from "../../icons/BackArow";
import Palette from "../../styles/Palette";
import { useNavigation } from "@react-navigation/native";

function CustomBackButtom() {
	const navigation = useNavigation();
	const scheme = useColorScheme() === "dark";
	const themeStyle = {
		color: scheme ? Palette.darkTh.text : Palette.lightTh.text,
	};

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("Home")}
			style={styles.buttonContainer}
		>
			<BackArow color={themeStyle.color} />
			<Text style={[styles.buttonText, { color: themeStyle.color }]}>Back</Text>
		</TouchableOpacity>
	);
}

export default CustomBackButtom;

const styles = StyleSheet.create({
	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		maxWidth: 70,
	},
	buttonText: { fontSize: 18, marginLeft: 5 },
});
