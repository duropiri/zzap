import React from "react";
import { View, Text, FlatList } from "react-native";

const LoanDetailsList = ({ details }) => {
  const renderItem = ({ item }) => (
    <View className="flex-1 flex-row justify-between py-3 border-b border-[#D9D9D9] items-center">
      <Text className="pl-4 text-black">{item.label}</Text>
      <Text className="pr-4 text-black font-bold">{item.value}</Text>
    </View>
  );

  return (
    <FlatList
      data={details}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default LoanDetailsList;
