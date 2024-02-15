import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import ProgressBar from "../components/ProgressBar";

const EligibilityFail = ({ navigation }) => {
  const handlePress = (buttonName) => {
    // You can determine which button was pressed by the argument passed
    switch (buttonName) {
      case "back":
        console.log("Back button pressed");
        navigation.navigate("Home"); // Use React Navigation's navigate function
        // Handle login logic here
        break;
    }
  };
  return (
    <View className="flex-1 bg-white justify-between">
      <View className="p-4 w-full h-full">
        <View className="h-16 mb-2 px-4"></View>

        {/* Eligibility Progress Indicator */}
        <View className="items-center w-full mb-16">
          <View className="w-1/2">
            <ProgressBar totalSteps={4} currentStep={2} />
          </View>
        </View>

        {/* Eligibility Message */}
        <View className="flex-1 justify-center items-center px-4">
          <Text className="text-center text-2xl font-bold mb-8">
            You are ineligible
          </Text>
          <Text className="text-center text-2xl">We might get you some money later</Text>
        </View>

        {/* Check Eligibility Button */}
        <View className="flex-1 justify-end items-center mt-8 w-full">
          <TouchableOpacity
            className="bg-[#A761B6] rounded-lg py-2 mb-4 h-12 w-full"
            onPress={() => handlePress("back")}
          >
            <Text className="text-white text-lg font-bold text-center h-12">
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EligibilityFail;
