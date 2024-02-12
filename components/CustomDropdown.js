import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';

const CustomDropdown = ({ data, onSelect, selectedValue, placeholder }) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (value) => {
    onSelect(value);
    setVisible(false);
  };

  const renderDropdownArrow = () => {
    return visible ? (
      <Text className="text-black ml-2">▲</Text>
    ) : (
      <Text className="text-black ml-2">▼</Text>
    );
  }

  return (
    <View className="w-full">
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        className="border border-gray-300 bg-white px-3 py-2 rounded-md flex-row justify-between items-center min-h-[48px]"
      >
        <Text className={`${selectedValue ? 'text-black' : 'text-gray-400'}`}>
          {selectedValue || placeholder}
        </Text>
        {renderDropdownArrow()}
      </TouchableOpacity>

      {visible && (
        <View className="mt-1 w-full">
          <ScrollView
            className="bg-white border border-t-0 border-gray-300 rounded-md shadow-lg max-h-60"
            nestedScrollEnabled={true}
          >
            {data.map((item) => (
              <TouchableOpacity
                key={item.value}
                className="px-3 py-2 hover:bg-gray-100"
                onPress={() => handleSelect(item.value)}
              >
                <Text className="text-black">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;
