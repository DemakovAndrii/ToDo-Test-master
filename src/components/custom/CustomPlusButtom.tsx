import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Plus from "../../icons/Plus";
import { useNavigation } from "@react-navigation/native";

const CustomPlusButtom = () => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity onPress={() => navigation.navigate("TaskScreen")}>
			<LinearGradient
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				colors={["#67B8F0", "#51D8D0"]}
				style={styles.button}
			>
				<Plus />
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default CustomPlusButtom;

const styles = StyleSheet.create({
	button: {
		height: 70,
		width: 70,
		borderRadius: 70,
		justifyContent: "center",
		alignItems: "center",
	},
});
