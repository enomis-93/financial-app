import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ResponsiveAppBar from "./components/header/responsive-app-bar.component";

export default function App() {
	return (
		<View style={styles.container}>
			<ResponsiveAppBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
