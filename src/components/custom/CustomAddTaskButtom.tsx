import React, { FC } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

type Props = {
	text: string;
	onPress: () => void;
};

const CustomAddTaskButtom: FC<Props> = ({ text, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				colors={["#67B8F0", "#51D8D0"]}
				style={styles.button}
			>
				<Text style={styles.buttomTest}>{text}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default CustomAddTaskButtom;

const styles = StyleSheet.create({
	button: {
		height: 50,
		width: "100%",
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	buttomTest: { fontSize: 18, color: "white", alignSelf: "center" },
});
