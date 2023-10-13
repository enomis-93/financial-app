import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
import ChartComponent from './components/chartComponent';
import BankAccountContainer from './components/bank-accounts-container/bank-accounts-container.component';
import ResponsiveAppBar from './components/header/responsive-app-bar.component';
const screenWidth = Dimensions.get("window").width;
export default function App() {
  return (
    <View style={styles.container}>
      <ResponsiveAppBar />
      <BankAccountContainer></BankAccountContainer>
      <ChartComponent></ChartComponent>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        
    }
});
