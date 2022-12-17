import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
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
			style={styles.calendarItem}
		>
			<View style={styles.monthContainer}>
				<Text style={styles.monthText}>
					{fMonth}, {year}
				</Text>
			</View>
			{/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<View style={styles.datesContainer}>
					{Month.map(({ date, day }, index) => {
						return (
							<View key={index} style={styles.oneDayCont}>
								<Text style={styles.date}>{date}</Text>
								<Text style={styles.day}> {day}</Text>
							</View>
						);
					})}
				</View>
			</ScrollView> */}
			<Text style={styles.date}>{day}</Text>
		</LinearGradient>
	);
};

export default TopCalendar;

const styles = StyleSheet.create({
	calendarItem: {
		justifyContent: "center",
		alignItems: "center",
		height: 170,
	},
	monthContainer: { alignItems: "center", paddingTop: 15, paddingBottom: 10 },
	monthText: { fontSize: 20, color: "white" },
	datesContainer: { flex: 1, flexDirection: "row" },
	oneDayCont: { alignItems: "center" },
	date: {
		fontSize: 56,
		fontWeight: "700",
		color: "white",
		paddingHorizontal: 20,
	},
	day: { fontSize: 14, color: "white" },
});
