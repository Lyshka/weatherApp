import {StyleSheet, Text, View} from "react-native";

export default HeaderTitle = ({headerTitle}) => (
	<Text style={styles.textHeader}>
		{headerTitle}
	</Text>
)



const styles = StyleSheet.create({
	textHeader: {
		fontSize: 40,
		color: 'white'
	}
})