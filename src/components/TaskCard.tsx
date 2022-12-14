import { Text, useColorScheme, View } from "react-native";
import React, { FC } from "react";
import Palette from "../styles/Palette";

type Props = {
	task: string;
};

const TaskCard: FC<Props> = ({ task }) => {
	const scheme = useColorScheme() === "dark";

	return (
		<View
			style={{
				backgroundColor: scheme
					? Palette.darkTh.cardColor
					: Palette.lightTh.cardColor,
				padding: 14,
				marginBottom: 10,
				borderRadius: 20,
			}}
		>
			<Text
				style={{
					color: scheme ? Palette.darkTh.text : Palette.lightTh.text,
					fontSize: 18,
				}}
			>
				{task && task.length > 79 ? `${task.slice(0, 79)}...` : task}
			</Text>
		</View>
	);
};

export default TaskCard;
