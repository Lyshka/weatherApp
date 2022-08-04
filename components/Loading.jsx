import React from "react";
import {Text, View, StyleSheet, StatusBar, ActivityIndicator} from "react-native";

export const Loading = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={"large"}/>
			<StatusBar barStyle={"dark-content"} />
			<Text style={styles.text}>
				Загрузка...
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#2c2c2c',
		fontSize: 30
	}
})