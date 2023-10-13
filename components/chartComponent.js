import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions, View, Text } from "react-native";
const ChartComponent = () => {
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
              data: [
                150,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
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
