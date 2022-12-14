import React from "react";
import { TouchableOpacity, View } from "react-native";
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
				style={{
					height: 70,
					width: 70,
					borderRadius: 70,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Plus />
			</LinearGradient>
		</TouchableOpacity>
	);
};

export default CustomPlusButtom;
