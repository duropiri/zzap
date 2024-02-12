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

const EligibilityForm = ({ navigation }) => {
  // State for each picker
  const [selectedPurpose, setSelectedPurpose] = useState();
  const [selectedIncome, setSelectedIncome] = useState();
  const [selectedIncomeAmount, setSelectedIncomeAmount] = useState();
  const [selectedLoanType, setSelectedLoanType] = useState();
  const [selectedTenure, setSelectedTenure] = useState();

  // Placeholder data arrays for the pickers
  const purposeData = [
    { label: "Car Loan", value: "Car Loan" },
    { label: "House Loan", value: "House Loan" },
    // ... other options
  ];
  const incomeData = [
    { label: "Biweekly", value: "Biweekly" },
    // ... other options
  ];
  const incomeAmountData = [
    { label: "$0 - $1000", value: "$0 - $1000" },
    { label: "$1001 - $2000", value: "$1001 - $2000" },
    { label: "$2001 - $3000", value: "$2001 - $3000" },
    { label: "$3001 - $4000", value: "$3001 - $4000" },
    { label: "$4001 - $5000", value: "$4001 - $5000" },
    { label: "Above $5000", value: "$5000+" },
    // ... other options
  ];
  const loanTypeData = [
    { label: "Fixed", value: "Fixed" },
    // ... other options
  ];
  const tenureData = [
    { label: "36 months", value: "36 months" },
    // ... other options
  ];

  const handlePress = (buttonName) => {
    // You can determine which button was pressed by the argument passed
    switch (buttonName) {
      case "checkEligibility":
        console.log("Eligibility button pressed");
        navigation.navigate("EligibilitySuccess"); // Use React Navigation's navigate function
        // Handle login logic here
        break;
    }
  };

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

        <View className="flex-1 flex-col">
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
            <View className="flex-row min-h-[48px] w-full">
              <CustomDropdown
                data={purposeData}
                selectedValue={selectedPurpose}
                onSelect={setSelectedPurpose}
                placeholder="Car Loan"
              />
            </View>
          </View>

          {/* Your Income Field - Replace with Picker */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Your income</Text>
            <View className="flex-row min-h-[48px] w-full">
              <View className="min-h-[48px] w-1/3">
                <CustomDropdown
                  data={incomeData}
                  selectedValue={selectedIncome}
                  onSelect={setSelectedIncome}
                  placeholder="Biweekly"
                />
              </View>
              <View className="min-h-[48px] w-2/3 pl-2">
                <CustomDropdown
                  data={incomeAmountData}
                  selectedValue={selectedIncomeAmount}
                  onSelect={setSelectedIncomeAmount}
                  placeholder="Above $5000"
                />
              </View>
            </View>
          </View>

          {/* Loan Type Field - Replace with Picker */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Loan Type</Text>
            <View className="flex-row min-h-[48px] w-full">
              <CustomDropdown
                data={loanTypeData}
                selectedValue={selectedLoanType}
                onSelect={setSelectedLoanType}
                placeholder="Fixed"
              />
            </View>
          </View>

          {/* Tenure Field - Replace with Picker */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Tenure</Text>

            <View className="flex-row min-h-[48px] w-full">
              <CustomDropdown
                data={tenureData}
                selectedValue={selectedTenure}
                onSelect={setSelectedTenure}
                placeholder="36 months"
              />
            </View>
          </View>
        </View>

        {/* Check Eligibility Button */}
        <View className="flex-1 justify-center items-center mt-8 w-full">
          <TouchableOpacity
            className="bg-[#A761B6] rounded-lg py-2 mb-4 h-12 w-full"
            onPress={() => handlePress("checkEligibility")}
          >
            <Text className="text-white text-lg font-bold text-center h-12">
              Check Eligibility
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default EligibilityForm;
