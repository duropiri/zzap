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

const CreateEmail = ({navigation}) => {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Add more state hooks for other form fields as needed
  const handlePress = (buttonName) => {
    // You can determine which button was pressed by the argument passed
    switch (buttonName) {
      case "continue":
        console.log("Continue button pressed");
        navigation.navigate("Loans"); // Use React Navigation's navigate function
        // Handle login logic here
        break;
    }
  };

  return (
    <View className="flex-1 bg-white justify-between">
      <View className="p-4 w-full h-full">
        <Text className="text-center text-2xl font-bold mb-2 px-4">
          Let's get you some money azzap
        </Text>

        {/* Eligibility Progress Indicator */}
        <View className="items-center w-full">
          <View className="w-1/2">
            <ProgressBar totalSteps={4} currentStep={4} />
          </View>
        </View>

        <View className="flex-1 flex-col">
          {/* email field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Email</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-12"
              placeholder="lesliesawka@loan.com"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* confirm email field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Confirm Email</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-12"
              placeholder=""
              value={confirmEmail}
              onChangeText={setConfirmEmail}
            />
          </View>

          {/* password field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Choose Password</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-12"
              placeholder=""
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {/* confirm password field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Confirm Password</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-12"
              placeholder=""
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>
        </View>

        {/* Continue Button */}
        <View className="flex-1 justify-end items-center mt-8 w-full">
          <TouchableOpacity
            className="bg-[#A761B6] rounded-lg py-2 mb-4 h-12 w-full"
            onPress={() => handlePress("continue")}
          >
            <Text className="text-white text-lg font-bold text-center h-12">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateEmail;
