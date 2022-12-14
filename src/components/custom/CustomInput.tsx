import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { TextInput, useColorScheme } from "react-native";
import Palette from "../../styles/Palette";

type Props = {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
};

const CustomInput: FC<Props> = ({ setValue, value }) => {
	const scheme = useColorScheme() === "dark";

	return (
		<TextInput
			style={{
				backgroundColor: scheme
					? Palette.darkTh.cardColor
					: Palette.lightTh.cardColor,
				color: scheme ? Palette.darkTh.text : Palette.lightTh.text,
				fontSize: 18,
				marginBottom: 10,
				padding: 14,
				borderRadius: 20,
			}}
			onChangeText={setValue}
			value={value}
		/>
	);
};

export default CustomInput;
