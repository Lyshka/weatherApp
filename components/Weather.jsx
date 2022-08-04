import {Text, View, StyleSheet, StatusBar, RefreshControl} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {LinearGradient} from "expo-linear-gradient";
import {weatherOptions} from "./utils";
import {ScrollView} from "react-native";
import HeaderTitle from "./HeaderTitle";

export const Weather = ({temp, condition, getLocation, isLoading}) => {
	const {iconName, gradient, title, subtitle} = weatherOptions[condition]

	return (
		<ScrollView
			contentContainerStyle={styles.scrollView}
			refreshControl={
				<RefreshControl
					refreshing={isLoading}
					onRefresh={() => getLocation()}
				/>
			}
		>
			<LinearGradient colors={gradient} style={styles.container}>
				<StatusBar barStyle={"light-content"} />
				<HeaderTitle headerTitle={"Weather Lyshka"}/>
				<View style={styles.halfContainer}>
					<MaterialCommunityIcons name={iconName} size={96} color={'white'} />
					<Text style={styles.temp}>
						{temp}°
					</Text>
				</View>
				<View style={{...styles.halfContainer, ...styles.textContainer}}>
					<Text style={styles.title}>
						{title}
					</Text>
					<Text style={styles.subtitle}>
						{subtitle}
					</Text>
				</View>
			</LinearGradient>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	temp: {
		fontSize: 42,
		color: 'white'
	},
	title: {
		color: 'white',
		fontSize: 44,
		fontWeight: '300',
		marginBottom: 10
	},
	subtitle: {
		color: 'white',
		fontWeight: '600',
		fontSize: 24
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: 'flex-start'
	},
})