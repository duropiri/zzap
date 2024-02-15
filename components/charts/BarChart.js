import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Svg, Rect } from 'react-native-svg';

const BarChart = ({ data }) => {
  // Dimensions of the chart
  const screenWidth = Dimensions.get('window').width;
  const chartHeight = 200;
  const barWidth = screenWidth / data.length / 2;

  // Find the maximum value in the data
  const maxValue = Math.max(...data.map(item => item.value));

  // Function to scale a value to the chart dimensions
  const scaleY = (value) => (value / maxValue) * chartHeight;

  return (
    <View>
      <Svg height={chartHeight} width={screenWidth}>
        {data.map((item, index) => (
          <Rect
            key={index}
            x={barWidth * index}
            y={chartHeight - scaleY(item.value)} // Position the bar from the top down
            width={barWidth - 5} // Subtract a bit for spacing between bars
            height={scaleY(item.value)}
            fill={item.color}
          />
        ))}
      </Svg>
      {/* Labels for the bars */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
        {data.map((item, index) => (
          <Text key={index} style={{ width: barWidth, textAlign: 'center' }}>
            {item.label}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default BarChart;
