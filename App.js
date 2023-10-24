import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
import ChartComponent from './components/chartComponent';
import BankAccountContainer from './components/bank-accounts-container/bank-accounts-container.component';
import ResponsiveAppBar from './components/header/responsive-app-bar.component';
import React, {useState } from 'react';
const screenWidth = Dimensions.get("window").width;
import { Provider } from 'react-redux';
import  store  from './store';


export default function App() {
    const[selectedIdBankAccount,setSelectedIdBankAccount]=useState(0)


    const onBankAccountIDChange = (bankAccountId) =>{
        setSelectedIdBankAccount(bankAccountId)
        console.log(bankAccountId)
    }
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <ResponsiveAppBar />
      <BankAccountContainer onBankAccountIDChange={onBankAccountIDChange}></BankAccountContainer>
      <ChartComponent selectedBankAccountID={selectedIdBankAccount} ></ChartComponent>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        
    }
});
 