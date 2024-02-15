import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const LoanCard = ({ loan, onPress }) => {
  // Define a function or a map to get the correct icon name based on the loan category
  const getIconName = (category) => {
    switch (category) {
      case "Education":
        return "graduation-cap"; // FontAwesome icon name
      case "Career":
        return "briefcase"; // FontAwesome icon name
      // Add more cases for other categories
      default:
        return "question-circle"; // Default icon
    }
  };

  return (
    <TouchableOpacity onPress={onPress} className="">
    <View className="m-2 p-4 rounded-lg border border-[#F8BFB2] bg-white flex-1">
      <View className="flex-row justify-between">
        <View className="flex-1">
          <View className="flex-row">
            <Icon name={getIconName(loan.category)} size={30} color="#031556" />

            <Text className="text-xl text-[#031556] mb-2 ml-2">
              {loan.type}
            </Text>
          </View>

          <Text className="text-5xl font-bold text-[#031556] my-4 text-left">
            {loan.amount}
          </Text>
        </View>
      </View>
      <View className="flex-row justify-between">
        <View className="flex-1">
          <Text className="text-[#031556]">Amount due</Text>
          <Text className="text-[#031556] font-bold">{loan.amountDue}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-[#031556]">Rate</Text>
          <Text className="text-[#031556] font-bold">{loan.rate}</Text>
        </View>
        <View className="flex-1">
          <Text className="text-[#031556] text-right">Due date</Text>
          <Text className="text-[#031556] font-bold text-right">
            {loan.dueDate}
          </Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default LoanCard;
