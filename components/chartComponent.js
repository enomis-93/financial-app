import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions, View, Text } from "react-native";
import { transactionService } from "../Service/Transaction.service";
import React, { useEffect,useState } from 'react';
function ChartComponent({selectedBankAccountID}) {
 const [dataset,setDataset]= useState([]);
 useEffect(() => {
  console.log(selectedBankAccountID);
  let monthData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Utilizza Promise.all per attendere il completamento di tutte le chiamate asincrone
  Promise.all(
    monthData.map((month) =>
      transactionService.getTransactionByMonth(selectedBankAccountID, month)
    )
  )
    .then((responses) => {
      const listOfAmount = responses.map((res) => +res);
      console.log(listOfAmount);
      setDataset(listOfAmount);
    })
    .catch((error) => {
      console.error("Errore nella chiamata API", error);
    });
}, [selectedBankAccountID]);

  return (
    <View style={{}}>
      <Text>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dic",
          ],
          datasets: [
            {
              data:dataset ? [...dataset] : [0,0,0,0,0,0,0,0,0,0,0,0]
              
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="€"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#0000",
          backgroundGradientFrom: "#ffff",
          backgroundGradientTo: "#ffff",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(25,118,210, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "#1976d2",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          border: "1px solid black",
        }}
      />
    </View>
  );
};
export default ChartComponent;
