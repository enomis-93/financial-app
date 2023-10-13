import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
import ChartComponent from './components/chartComponent';
import BankAccountContainer from './components/bank-accounts-container/bank-accounts-container.component';
const screenWidth = Dimensions.get("window").width;
export default function App() {
  return (
    <View style={styles.container}>
      <BankAccountContainer></BankAccountContainer>
      <ChartComponent></ChartComponent>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: '0em 1em'
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});
