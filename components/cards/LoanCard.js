import { View, Text } from "react-native";
import React from "react";

const LoanCard = ({ loan }) => {
  return (
    <View className="m-4 p-4 rounded-lg border border-[#F8BFB2] bg-white flex-1">
      <View className="flex-col justify-between">
        <View>
            {/* Add an icon that depends on the category of the loan */}
          <Text className="text-xl text-[#031556] mb-2">
            {loan.type}
          </Text>
        </View>

        <Text className="text-5xl font-bold text-[#031556] my-4">
          {loan.amount}
        </Text>
      </View>
      <View className="flex-row justify-between">
        <View className="flex-col justify-between mt-2">
          <Text className="text-[#031556]">Amount due</Text>
          <Text className="text-[#031556] font-bold">{loan.amountDue}</Text>
        </View>
        <View className="flex-col justify-between mt-2">
          <Text className="text-[#031556]">Rate</Text>
          <Text className="text-[#031556] font-bold">{loan.rate}</Text>
        </View>
        <View className="flex-col justify-between mt-2">
          <Text className="text-[#031556] text-right">Due date</Text>
          <Text className="text-[#031556] font-bold">{loan.dueDate}</Text>
        </View>
      </View>
    </View>
  );
};

export default LoanCard;
