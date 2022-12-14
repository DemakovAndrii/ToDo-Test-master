import React from "react";
import { ScrollView, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Month from "../data/month.json";

const TopCalendar = () => {
	const data = new Date();
	const year = data.getFullYear();
	const month = data.getMonth();
	const day = data.getDate();
	let fMonth = "";
	switch (month) {
		case 0:
			fMonth = "Январь";
			break;
		case 1:
			fMonth = "Февраль";
			break;
		case 2:
			fMonth = "Март";
			break;
		case 3:
			fMonth = "Апрель";
			break;
		case 4:
			fMonth = "Май";
			break;
		case 5:
			fMonth = "Июнь";
			break;
		case 6:
			fMonth = "Июль";
			break;
		case 7:
			fMonth = "Август";
			break;
		case 8:
			fMonth = "Сентябрь";
			break;
		case 9:
			fMonth = "Октябрь";
			break;
		case 10:
			fMonth = "Ноябрь";
			break;
		case 11:
			fMonth = "Декабрь";
			break;
	}

	return (
		<LinearGradient
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			colors={["#7F9CFA", "#51D2E7"]}
			style={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<View style={{ height: 170 }}>
				<View
					style={{ alignItems: "center", paddingTop: 15, paddingBottom: 10 }}
				>
					<Text style={{ fontSize: 20, color: "white" }}>
						{fMonth}, {year}
					</Text>
				</View>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<View style={{ flex: 1, flexDirection: "row" }}>
						{Month.map(({ date, day }, index) => {
							return (
								<View key={index} style={{ alignItems: "center" }}>
									<Text
										style={{
											fontSize: 56,
											fontWeight: "700",
											color: "white",
											paddingHorizontal: 20,
										}}
									>
										{date}
									</Text>
									<Text style={{ fontSize: 14, color: "white" }}> {day}</Text>
								</View>
							);
						})}
					</View>
				</ScrollView>
			</View>
		</LinearGradient>
	);
};

export default TopCalendar;
