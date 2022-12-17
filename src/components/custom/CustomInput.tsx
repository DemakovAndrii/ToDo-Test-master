import React, { Dispatch, FC, SetStateAction } from "react";
import { TextInput, useColorScheme, StyleSheet } from "react-native";
import Palette from "../../styles/Palette";

type Props = {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
};

const CustomInput: FC<Props> = ({ setValue, value }) => {
	const scheme = useColorScheme() === "dark";
	const themeStyle = {
		backgroundColor: scheme
			? Palette.darkTh.cardColor
			: Palette.lightTh.cardColor,
		color: scheme ? Palette.darkTh.text : Palette.lightTh.text,
	};

	return (
		<TextInput
			style={[
				styles.input,
				{
					backgroundColor: themeStyle.backgroundColor,
					color: themeStyle.color,
				},
			]}
			onChangeText={setValue}
			value={value}
		/>
	);
};

export default CustomInput;

const styles = StyleSheet.create({
	input: { fontSize: 18, marginBottom: 10, padding: 14, borderRadius: 20 },
});
