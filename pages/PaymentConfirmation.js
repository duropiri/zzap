import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Ensure you have this package installed
import InfoList from "../components/InfoList";

const PaymentConfirmation = ({ navigation, route }) => {
  const { payment } = route.params;
  console.log(payment);
  const paymentDetails = [
    { id: 1, title: "From", value: payment.account },
    { id: 2, title: "To", value: "Rent Loan (7981)" },
    { id: 3, title: "Amount", value: payment.amount },
    { id: 4, title: "Frequency", value: payment.recurrence },
  ];

  const handlePress = (buttonName) => {
    // You can determine which button was pressed by the argument passed
    switch (buttonName) {
      case "pay":
        console.log("Make another payment button pressed");
        navigation.navigate("Loans"); // Use React Navigation's navigate function
        // Handle login logic here
        break;
    }
  };
  return (
    <View className="flex-1 bg-white pt-4 px-4">
      <View className="items-center my-8">
        <Icon name="check" size={60} color="#FF7347" />
        <Text className="text-3xl mt-2">Payment Complete!</Text>
        <Text className="mt-2 text-xl">Nov. 23, 2022 11.29pm MST</Text>
        <Text className="mt-1 font-bold text-xl">Confirmation # 3606</Text>
      </View>
      <InfoList info={paymentDetails} />
      <TouchableOpacity
        onPress={() => handlePress("pay")}
        className="bg-[#A761B6] rounded-lg p-4 items-center mt-6"
      >
        <Text className="text-white text-lg font-bold">
          Make Another Payment
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentConfirmation;
