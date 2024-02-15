import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LoanDetailsList = ({ details }) => {
  const renderItem = ({ item }) => (
    <View className="flex-1 flex-row justify-between py-3 border-b border-[#D9D9D9] items-center">
      <Text className="pl-4 text-black">{item.label}</Text>
      <Text className="pr-4 text-black font-bold">{item.value}</Text>
    </View>
  );

  return (
    <>
      <FlatList
        data={details}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity
        onPress={() => {}}
        className="flex-1 flex-row justify-start py-3 border-b border-[#D9D9D9] items-center pl-4"
      >
        <Icon name={"file"} size={20} color="#FF7347" />
        <Text className="pl-2 text-black">View Statements</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {}}
        className="flex-1 flex-row justify-start py-3 border-b border-[#D9D9D9] items-center pl-4"
      >
        <Icon name={"credit-card"} size={20} color="#FF7347" />
        <Text className="pl-2 text-black">Manage automatic payments</Text>
      </TouchableOpacity>
    </>
  );
};

export default LoanDetailsList;
