// DatePicker.js
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ date, onDateChange, onClear, onSet }) => {
  return (
    <View
      className="bg-white rounded-2xl p-4 items-center shadow-md"
      // style={styles.container}
    >
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => onDateChange(selectedDate)}
        className="w-full my-5"
        // style={styles.datePicker}
      />
      <View
        className="flex-row min-h-[48px] w-full mt-4"
        // style={styles.buttonContainer}
      >
        <View className="min-h-[48px] w-1/2">
          <TouchableOpacity
            onPress={onClear}
            className="border-2 border-black rounded-lg px-6 py-2 h-12"
            // style={styles.outlineButton}
          >
            <Text
              className="text-black font-semibold text-lg text-center"
              // style={styles.outlineButtonText}
            >
              Clear
            </Text>
          </TouchableOpacity>
        </View>
        <View className="min-h-[48px] w-1/2 pl-2">
          <TouchableOpacity
            onPress={onSet}
            className="bg-[#A761B6] rounded-lg px-6 py-2 mb-4 h-12"
            // style={styles.filledButton}
          >
            <Text
              className="text-white font-semibold text-lg text-center"
              // style={styles.filledButtonText}
            >
              Set
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  datePicker: {
    width: "100%",
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  outlineButton: {
    borderColor: "#A761B6",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  outlineButtonText: {
    color: "#A761B6",
    textAlign: "center",
    fontWeight: "bold",
  },
  filledButton: {
    backgroundColor: "#A761B6",
    borderRadius: 10,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  filledButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DatePicker;
