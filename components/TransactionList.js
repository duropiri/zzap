import React from "react";
import { View, Text, FlatList } from "react-native";

const TransactionList = ({ transactions }) => {
  const renderItem = ({ item }) => (
    <View className="flex-1 flex-row justify-between py-3 border-b border-[#D9D9D9] items-center">
      <Text className="pl-4 text-black">{item.date}</Text>
      <Text className="pr-4 text-black font-bold">{item.amount}</Text>
    </View>
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TransactionList;