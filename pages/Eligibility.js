import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ProgressBar from "../components/ProgressBar";
import CustomDropdown from "../components/CustomDropdown";

const Eligibility = () => {
  // Placeholder values for the dropdowns
  const purposes = [
    { label: "Car Loan", value: "car" },
    { label: "Home Loan", value: "home" },
    // ...other options
  ];

  const incomes = [
    { label: "Biweekly", value: "biweekly" },
    { label: "Monthly", value: "monthly" },
    // ...other options
  ];

  const loanTypes = [
    { label: "Personal", value: "personal" },
    { label: "Business", value: "business" },
    // ...other options
  ];

  const tenures = [
    { label: "12 months", value: "12" },
    { label: "24 months", value: "24" },
    // ...other options
  ];

  const [selectedPurpose, setSelectedPurpose] = useState(null);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4 w-full">
        <Text className="text-center text-2xl font-bold mb-2 px-4">
          Let's get you some money azzap
        </Text>

        {/* Eligibility Progress Indicator */}
        <View className="items-center w-full">
          <View className="w-1/2">
            <ProgressBar totalSteps={4} currentStep={1} />
          </View>
        </View>

        {/* Loan Amount Field */}
        <View className="mb-4">
          <Text className="text-lg mb-2 font-semibold">Loan Amount</Text>
          <TextInput
            className="border border-gray-300 p-2 rounded-md h-12"
            placeholder="$23,000"
          />
        </View>

        {/* Purpose Field - Replace with Picker */}
        <View className="mb-4">
          <Text className="text-lg mb-2 font-semibold">Purpose</Text>
          {/* <CustomDropdown
            data={purposes}
            selectedValue={selectedPurpose}
            onSelect={(value) => setSelectedPurpose(value)}
            placeholder="Select purpose"
          /> */}
        </View>

        {/* Your Income Field - Replace with Picker */}
        <View className="mb-4">
          <Text className="text-lg mb-2 font-semibold">Your income</Text>
          <TextInput
            className="border border-gray-300 p-2 rounded-md h-12"
            placeholder="Biweekly"
          />
        </View>

        {/* Loan Type Field - Replace with Picker */}
        <View className="mb-4">
          <Text className="text-lg mb-2 font-semibold">Loan Type</Text>
          <TextInput
            className="border border-gray-300 p-2 rounded-md h-12"
            placeholder="Choose loan type"
          />
        </View>

        {/* Tenure Field - Replace with Picker */}
        <View className="mb-4">
          <Text className="text-lg mb-2 font-semibold">Tenure</Text>
          <TextInput
            className="border border-gray-300 p-2 rounded-md h-12"
            placeholder="Select tenure"
          />
        </View>

        {/* Check Eligibility Button */}
        <View className="flex-1 justify-center items-center mt-8 w-full">
          <TouchableOpacity className="bg-[#A761B6] rounded-lg py-2 mb-4 h-12 w-full">
            <Text className="text-white text-lg font-bold text-center h-12">
              Check Eligibility
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Eligibility;
