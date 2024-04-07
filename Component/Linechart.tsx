import React from 'react'
import { Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit'
import { View } from 'tamagui'
const screenWidth = Dimensions.get("window").width-40;
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `#008748`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Rainy Days"] // optional
};  

const chartConfig = {
  backgroundGradientFrom: "#ffff",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#ffff",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `#008748`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
function Linechart() {
  return (
    <View>
      <LineChart
  data={data}
  width={screenWidth}
  height={220}
  style={{borderRadius:15, marginVertical:5}}
  chartConfig={chartConfig}
/>
    </View>
  )
}

export default Linechart