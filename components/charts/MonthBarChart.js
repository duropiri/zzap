import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const ProgressBar = ({ value, color }) => (
  <View className="flex flex-1 h-4 rounded-lg overflow-hidden bg-[#4063E161]">
    <View
      style={[{ width: `${value}%` }]}
      className={`h-4 rounded-lg bg-[${color}]`}
    />
  </View>
);

const MonthBarChart = ({ data }) => {
  return (
    <View className="p-2">
      {data.map((item, index) => (
        <View key={index} className="flex-row items-center my-1">
          <Text className="mr-2 text-lg text-black w-10">{item.label}</Text>
          <ProgressBar value={item.value} color={item.color} />
        </View>
      ))}
    </View>
  );
};

export default MonthBarChart;
