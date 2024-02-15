import React from "react";
import { View, Text } from "react-native";

const Legend = ({ data }) => {
  return (
    <View className="flex-col items-start">
      {data.map((slice, index) => (
        <View key={index} className="flex-row items-center mr-4 pb-6">
          <View
            className={`h-4 w-4 rounded-full mr-2`}
            style={{ backgroundColor: slice.svg.fill }}
          />
          <Text className="text-[#031556]">{slice.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Legend;
