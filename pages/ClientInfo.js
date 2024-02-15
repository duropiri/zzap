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
import DatePicker from "../components/DatePicker";
import moment from "moment";

const ClientInfo = ({ navigation }) => {
  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  // Add more state hooks for other form fields as needed
  const [selectedIncome, setSelectedIncome] = useState();
  const [selectedIncomeAmount, setSelectedIncomeAmount] = useState();
  const [selectedExpenses, setSelectedExpenses] = useState();
  const [selectedExpensesAmount, setSelectedExpensesAmount] = useState();

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [dob, setDob] = useState({
    day: '',
    month: '',
    year: '',
  });

  // Handler for changing the date
  const onDateChange = (selectedDate) => {
    setDate(selectedDate || date);
  };

  // Clear date selection
  const onClear = () => {
    setDob({
      day: '',
      month: '',
      year: '',
    });
    setDatePickerVisible(false);
  };

  // Confirm and set the date selection
  const onSet = () => {
    const newDob = {
      day: moment(date).format('DD'),
      month: moment(date).format('MM'),
      year: moment(date).format('YYYY'),
    };
    setDob(newDob);
    setDatePickerVisible(false);
  };

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
  const expensesData = [
    { label: "Biweekly", value: "Biweekly" },
    // ... other options
  ];
  const expensesAmountData = [
    { label: "$0 - $1000", value: "$0 - $1000" },
    { label: "$1001 - $2000", value: "$1001 - $2000" },
    { label: "$2001 - $3000", value: "$2001 - $3000" },
    { label: "$3001 - $4000", value: "$3001 - $4000" },
    { label: "$4001 - $5000", value: "$4001 - $5000" },
    { label: "Above $5000", value: "$5000+" },
    // ... other options
  ];

  const handlePress = (buttonName) => {
    // You can determine which button was pressed by the argument passed
    switch (buttonName) {
      case "continue":
        console.log("Continue button pressed");
        navigation.navigate("CreateEmail"); // Use React Navigation's navigate function
        // Handle login logic here
        break;
    }
  };

  const renderDateOfBirthSection = () => {
    if (isDatePickerVisible) {
      return (
        <DatePicker
          date={date}
          onDateChange={onDateChange}
          onClear={onClear}
          onSet={onSet}
        />
      );
    } else {
      return (
        <View className="flex-row min-h-[48px] w-full">
          <View className="min-h-[48px] w-1/3">
            <TouchableOpacity
              onPress={() => setDatePickerVisible(true)}
              className="border border-gray-300 bg-white px-3 py-2 rounded-md flex-row justify-between items-center min-h-[48px]"
            >
              <Text className={`${dob.day ? "text-black" : "text-gray-400"}`}>
                {dob.day || ""}
              </Text>
              <Text className="text-black ml-2">▼</Text>
            </TouchableOpacity>
          </View>
          <View className="min-h-[48px] w-1/3 pl-2">
            <TouchableOpacity
              onPress={() => setDatePickerVisible(true)}
              className="border border-gray-300 bg-white px-3 py-2 rounded-md flex-row justify-between items-center min-h-[48px]"
            >
              <Text className={`${dob.month ? "text-black" : "text-gray-400"}`}>
                {dob.month || ""}
              </Text>
              <Text className="text-black ml-2">▼</Text>
            </TouchableOpacity>
          </View>
          <View className="min-h-[48px] w-1/3 pl-2">
            <TouchableOpacity
              onPress={() => setDatePickerVisible(true)}
              className="border border-gray-300 bg-white px-3 py-2 rounded-md flex-row justify-between items-center min-h-[48px]"
            >
              <Text className={`${dob.year ? "text-black" : "text-gray-400"}`}>
                {dob.year || ""}
              </Text>
              <Text className="text-black ml-2">▼</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
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
            <ProgressBar totalSteps={4} currentStep={3} />
          </View>
        </View>

        <View className="flex-1 flex-col">
          {/* First name field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">First Name</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-12"
              placeholder="Leslie"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

          {/* Middle name field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Middle Name</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-12"
              placeholder="Pady"
              value={middleName}
              onChangeText={setMiddleName}
            />
          </View>

          {/* last name field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Last Name</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-12"
              placeholder="Sawka"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          {/* Date of Birth */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Date of Birth</Text>
            {renderDateOfBirthSection()}
          </View>

          {/* phone number field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Phone Number</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-12"
              placeholder=""
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>

          {/* address field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Address</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-24"
              placeholder=""
              value={address}
              onChangeText={setAddress}
            />
          </View>

          {/* city field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">City</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-12"
              placeholder=""
              value={city}
              onChangeText={setCity}
            />
          </View>

          {/* postal code field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Postal Code</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-12"
              placeholder=""
              value={postalCode}
              onChangeText={setPostalCode}
            />
          </View>

          {/* country field */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Country</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-md h-12"
              placeholder=""
              value={country}
              onChangeText={setCountry}
            />
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

          {/* Your Expenses Field - Replace with Picker */}
          <View className="mb-4">
            <Text className="text-lg mb-2 font-semibold">Your expenses</Text>
            <View className="flex-row min-h-[48px] w-full">
              <View className="min-h-[48px] w-1/3">
                <CustomDropdown
                  data={expensesData}
                  selectedValue={selectedExpenses}
                  onSelect={setSelectedExpenses}
                  placeholder="Biweekly"
                />
              </View>
              <View className="min-h-[48px] w-2/3 pl-2">
                <CustomDropdown
                  data={expensesAmountData}
                  selectedValue={selectedExpensesAmount}
                  onSelect={setSelectedExpensesAmount}
                  placeholder="Above $5000"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Continue Button */}
        <View className="flex-1 justify-center items-center mt-8 w-full">
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
    </ScrollView>
  );
};

export default ClientInfo;
