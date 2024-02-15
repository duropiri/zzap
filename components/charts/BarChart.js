import React from 'react';
import { View, Dimensions } from 'react-native';
import { Svg, Rect, Text as SvgText } from 'react-native-svg';

const BarChart = ({ data }) => {
  const screenWidth = Dimensions.get('window').width;
  const chartHeight = 200;
  const padding = 30; // Added padding for labels
  const barWidth = (screenWidth - (padding*(2.33))) / data.length;

  const rawMaxValue = Math.max(...data.map(item => item.value));
  const startingValue = 50; // Start the scale at 100
  const maxValue = Math.ceil((rawMaxValue - startingValue) / 50) * 50 + startingValue;

  const scaleY = (value) => ((value - startingValue) / (maxValue - startingValue)) * chartHeight;

  const generateYAxisLabels = () => {
    let labels = [];
    for (let value = 100; value <= maxValue; value += 50) {
      const yPosition = chartHeight - scaleY(value);
      labels.push({ value, yPosition });
    }
    return labels;
  };

  const yAxisLabels = generateYAxisLabels();

  return (
    <View className="p-2 bg-white shadow-lg">
      <Svg height={chartHeight} width={screenWidth}>
        {data.map((item, index) => (
          <Rect
            key={index}
            x={padding + barWidth * index}
            y={chartHeight - scaleY(item.value)}
            width={barWidth - (barWidth/4)} // Adjust for spacing between bars
            height={scaleY(item.value)}
            fill={"#FF73472E"}
          />
        ))}
        {yAxisLabels.map((label, index) => (
          <SvgText
            key={index}
            x={0}
            y={label.yPosition - 6} // Adjust the label to be centered vertically
            fontSize="12"
            fill="black"
            textAnchor="start"
          >
            {label.value}
          </SvgText>
        ))}
      </Svg>
    </View>
  );
};

export default BarChart;
