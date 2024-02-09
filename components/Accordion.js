import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className="m-2">
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        className="flex-row justify-between items-center p-4 border-2 border-[#A761B6] rounded-lg"
      >
        <Text className="font-semibold">{title}</Text>
        <Text className="font-bold">{isOpen ? "-" : "+"}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View className="p-4 border-t-2 border-gray-300">{children}</View>
      )}
    </View>
  );
};

export default Accordion;
