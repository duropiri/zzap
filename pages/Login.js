import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const Login = ({ navigation }) => {
  // You would add the necessary state and functions to handle user input and authentication

  const handlePress = (buttonName) => {
    // You can determine which button was pressed by the argument passed
    switch (buttonName) {
      case "login":
        console.log("Login button pressed");
        navigation.navigate("Eligibility"); // Use React Navigation's navigate function
        // Handle login logic here
        break;
      case "forgotPassword":
        console.log("Forgot Password button pressed");
        // Handle forgot password logic here
        break;
      case "signUp":
        console.log("Sign Up button pressed");
        navigation.navigate("Eligibility"); // Use React Navigation's navigate function
        // Handle sign up logic here
        break;
      default:
        console.log("Unhandled button press");
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <View className="w-full">
        <TextInput
          placeholder="Email"
          className="border border-gray-300 p-2 rounded-md mb-4 h-12 py-6"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="border border-gray-300 p-2 rounded-md mb-4 h-12"
        />
        <View className="py-6"></View>
        <TouchableOpacity
          onPress={() => handlePress("login")}
          className="bg-[#A761B6] rounded-lg px-6 py-2 mb-4 h-12 w-full"
        >
          <Text className="text-white font-semibold text-lg text-center">
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="mb-4">
          <Text className="text-black text-right underline">
            Forgot Password
          </Text>
        </TouchableOpacity>
        <Text className="text-start mb-4">Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => handlePress("signUp")}
          className="border border-[#A761B6] p-4 rounded-md"
        >
          <Text className="text-black font-bold text-center">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
