import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
import ChartComponent from './components/chartComponent';
const screenWidth = Dimensions.get("window").width;
export default function App() {
  return (
    <View style={styles.container}>
      <ChartComponent></ChartComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
