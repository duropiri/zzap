import React, { useState } from "react";
import {
  View,
  Modal,
  Button,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePickerPopup = ({ visible, onConfirm, onCancel }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleConfirm = () => {
    onConfirm(date);
    onCancel(); // Close the picker
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View className="flex-1 justify-center items-center bg-gray-900 bg-opacity-60">
        <View className="bg-white rounded-lg p-4">
          {Platform.OS === "android" && (
            <Button onPress={onCancel} title="Set" />
          )}
          <DateTimePicker
            value={date}
            mode={'date'}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={onChange}
            style={{ width: '100%' }}
          />
          {Platform.OS === "ios" && (
            <View className="flex-row justify-between items-center">
              {/* Outlined Button */}
              <TouchableOpacity
                onPress={handleConfirm}
                className="border-2 border-[#A761B6] rounded-lg px-6 py-2 h-11 w-1/2 mx-2"
              >
                <Text className="text-black font-semibold text-lg text-center">
                  Clear
                </Text>
              </TouchableOpacity>
              {/* Filled Button */}
              <TouchableOpacity
                onPress={handleConfirm}
                className="bg-[#A761B6] rounded-lg px-6 py-2 h-11 w-1/2 mx-2"
              >
                <Text className="text-white font-semibold text-lg text-center">
                  Set
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default DatePickerPopup;
