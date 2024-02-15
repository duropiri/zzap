import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import InfoList from "../components/InfoList";
import LoanDetailsList from "../components/LoanDetailsList";
import BarChart from "../components/charts/BarChart";
import DoughnutChart from "../components/charts/DoughnutChart";
import Legend from "../components/charts/Legend";
import CustomDropdown from "../components/CustomDropdown";
import MonthBarChart from "../components/charts/MonthBarChart";

const LoanDetails = ({ navigation, route }) => {
  // Assume loan details are passed via route.params for this example
  const { loan } = route.params;
  const [view, setView] = useState("transactionHistory"); // 'transactionHistory' or 'loanDetails'
  const [overview, setOverview] = useState("review"); // 'transactionHistory' or 'loanDetails'

  // State to keep track of which payment amount button is active
  const [activeAmount, setActiveAmount] = useState(null);

  // State to keep track of which payment recurrence button is active
  const [activeRecurrence, setActiveRecurrence] = useState(null);

  const [schedulePayment, setSchedulePayment] = useState(null);
  const [account, setAccount] = useState(null);

  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    if (paymentData.amount && paymentData.recurrence && paymentData.account) {
      navigateToPaymentScreen(paymentData);
    }
  }, [paymentData]);

  const setPaymentAndNavigate = () => {
    setPaymentData({
      amount: activeAmount,
      recurrence: activeRecurrence,
      account: account,
    });
  };

  // Dummy data for the bar lengths
  const data = [
    { label: "Apr.", value: 80, color: "#FF7347" },
    { label: "Mar.", value: 70, color: "#FF7347" },
    { label: "Feb.", value: 60, color: "#FF7347" },
  ];

  const navigateToPaymentScreen = (paymentData) => {
    navigation.navigate("PaymentConfirmation", { payment: paymentData });
  };

  // Function to update the active payment amount
  const selectPaymentAmount = (amount) => {
    setActiveAmount(amount);
  };

  // Function to update the active payment recurrence
  const selectPaymentRecurrence = (recurrence) => {
    setActiveRecurrence(recurrence);
  };

  // Helper function to generate touchable opacity style
  const getButtonStyle = (isActive) => {
    return isActive
      ? "bg-[#A761B6] rounded-lg justify-center h-12 px-1"
      : "bg-white rounded-lg justify-center border-2 border-[#F0C8DF] h-12 px-1";
  };

  const getIconName = (category) => {
    switch (category) {
      case "Education":
        return "graduation-cap"; // FontAwesome icon name
      case "Career":
        return "briefcase"; // FontAwesome icon name
      // Add more cases for other categories
      default:
        return "question-circle"; // Default icon
    }
  };

  const BarChartData = [
    { value: 140 },
    { value: 160 },
    { value: 260 },
    { value: 140 },
    { value: 175 },
    { value: 200 },
    { value: 150 },
    { value: 225 },
    { value: 200 },
    { value: 110 },
    { value: 150 },
    { value: 230 },
    { value: 120 },
    { value: 170 },
    { value: 260 },
    { value: 140 },
    { value: 175 },
    { value: 190 },
    { value: 70 },
    { value: 230 },
    { value: 200 },
    { value: 110 },
    { value: 160 },
    { value: 160 },

    // ... other data points
  ];

  const DoughnutChartData = [
    {
      key: "paid-amount",
      name: "Paid Amount",
      amount: "15", // This would be calculated based on the loans data
      svg: { fill: "#C69CCF" },
    },
    {
      key: "unpaid-amount",
      name: "Unpaid amount",
      amount: "85", // This would be calculated based on the loans data
      svg: { fill: "#FF734766" },
    },
  ];

  // Sample data - this should come from your state or props
  const transactions = [
    { id: 1, title: "Wed Nov 16, 2022", value: "$600.00" },
    { id: 2, title: "Wed Nov 16, 2022", value: "$600.00" },
    { id: 3, title: "Wed Nov 16, 2022", value: "$600.00" },
    { id: 4, title: "Wed Nov 16, 2022", value: "$600.00" },
    { id: 5, title: "Wed Nov 16, 2022", value: "$600.00" },
    { id: 6, title: "Wed Nov 16, 2022", value: "$600.00" },
    { id: 7, title: "Wed Nov 16, 2022", value: "$600.00" },
    { id: 8, title: "Wed Nov 16, 2022", value: "$600.00" },
    // Add more transactions here
  ];

  // Data for the loan details
  const loanDetailsData = [
    { label: "Total loan amount", value: "$23,000" },
    { label: "Total amount paid", value: "$2,000" },
    { label: "Total interest paid", value: "$1500" },
    { label: "Balance", value: "$22,000" },
    { label: "Minimum payment", value: "$200" },
    { label: "Interest ratet", value: "2%" },
    { label: "Tenure", value: "36 months" },
    { label: "Last payment date", value: "Nov-16-2022" },
    { label: "Next payment date", value: "Nov-23-2022" },
    { label: "On track to pay off by", value: "Apr-30-2030" },
    // ... other details
  ];

  const frequencyData = [
    { label: "Weekly", value: "Weekly" },
    { label: "Biweekly", value: "Biweekly" },
    { label: "Monthly", value: "Monthly" },
    { label: "Custom", value: "Custom" },
    // ... other options
  ];

  const scheduleData = [
    { label: "Now", value: "Now" },
    { label: "1 hour", value: "1 hour" },
    { label: "24 hours", value: "24 hours" },
    { label: "3 days", value: "3 days" },
    { label: "7 days", value: "7 days" },
    { label: "Custom", value: "Custom" },
    // ... other options
  ];

  const accountData = [
    { label: "Mastercard (3306)", value: "Mastercard (3306)" },
    // ... other options
  ];

  const handlePress = (buttonName) => {
    // You can determine which button was pressed by the argument passed
    switch (buttonName) {
      case "pay":
        console.log("Pay button pressed");
        navigation.navigate("PaymentConfirmation", { payment: paymentData }); // Use React Navigation's navigate function
        // Handle login logic here
        break;
    }
  };

  const renderContentMenu = () => {
    if (view === "transactionHistory") {
      return <InfoList info={transactions} />;
    } else if (view === "loanDetails") {
      return <LoanDetailsList details={loanDetailsData} />;
    } else {
      // Default view or another view can be returned
      return <Text>Option Doesn't Exist</Text>;
    }
  };

  const renderOverview = () => {
    if (overview === "review") {
      return (
        <>
          <View className="pt-4 px-4">
            <View className="">
              <TouchableOpacity
                onPress={() => setOverview("payment")}
                className="bg-[#A761B6] rounded-lg p-4 items-center mt-6"
              >
                <Text className="text-white text-lg font-bold">
                  Make Payment
                </Text>
              </TouchableOpacity>

              <Text className="text-2xl font-bold pt-4">Account review</Text>
              {/* Insert bar chart component here */}
            </View>
          </View>
          <View className="px-3 pb-3 mb-10">
            <BarChart data={BarChartData} />
          </View>

          <View className="flex-row min-h-[40px] w-full mt-4">
            <View className="min-h-[40px] w-1/2">
              <TouchableOpacity
                onPress={() => setView("transactionHistory")}
                className={`${
                  view === "transactionHistory"
                    ? "bg-[#A761B6]"
                    : "border-2 border-[#EDADD3]"
                } px-6 py-2 h-12 justify-center`}
              >
                <Text
                  className={`${
                    view === "transactionHistory" ? "text-white" : "text-black"
                  } font-semibold text-sm text-center`}
                >
                  Transaction history
                </Text>
              </TouchableOpacity>
            </View>
            <View className="min-h-[40px] w-1/2">
              <TouchableOpacity
                onPress={() => setView("loanDetails")}
                className={`${
                  view === "loanDetails"
                    ? "bg-[#A761B6]"
                    : "border-2 border-[#EDADD3]"
                } px-6 py-2 h-12 justify-center`}
              >
                <Text
                  className={`${
                    view === "loanDetails" ? "text-white" : "text-black"
                  } font-semibold text-sm text-center`}
                >
                  Loan details
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Conditionally render the content based on the selected view */}
          <View className="py-2">{renderContentMenu()}</View>
        </>
      );
    } else if (overview === "payment") {
      return (
        <>
          <View className="pt-4 px-4">
            <View className="w-full flex-col">
              {/* Payment amount */}
              <View className="flex-row mt-6">
                <View className="min-h-[48px] w-1/3">
                  <TouchableOpacity
                    onPress={() => selectPaymentAmount("$200")}
                    className={getButtonStyle(activeAmount === "$200")}
                  >
                    <Text
                      className={`text-sm text-center ${
                        activeAmount === "$200" ? "text-white" : "text-black"
                      }`}
                    >
                      Default amount $200
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="min-h-[48px] w-1/3 pl-2">
                  <TouchableOpacity
                    onPress={() => selectPaymentAmount("Custom")}
                    className={getButtonStyle(activeAmount === "Custom")}
                  >
                    <Text
                      className={`text-sm text-center ${
                        activeAmount === "Custom" ? "text-white" : "text-black"
                      }`}
                    >
                      Custom amount $
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="min-h-[48px] w-1/3 pl-2">
                  <TouchableOpacity
                    onPress={() => selectPaymentAmount("$22,000")}
                    className={getButtonStyle(activeAmount === "$22,000")}
                  >
                    <Text
                      className={`text-sm text-center ${
                        activeAmount === "$22,000" ? "text-white" : "text-black"
                      }`}
                    >
                      Entire amount $22,000
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Payment recurrence */}
              <Text className="text-xl font-bold pt-6">
                Set as recurring payment
              </Text>
              <View className="flex-row mt-2">
                <View className="min-h-[48px] w-1/4">
                  <TouchableOpacity
                    onPress={() => selectPaymentRecurrence("Weekly")}
                    className={getButtonStyle(activeRecurrence === "Weekly")}
                  >
                    <Text
                      className={`text-sm text-center ${
                        activeRecurrence === "Weekly"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Weekly
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="min-h-[48px] w-1/4 pl-2">
                  <TouchableOpacity
                    onPress={() => selectPaymentRecurrence("Biweekly")}
                    className={getButtonStyle(activeRecurrence === "Biweekly")}
                  >
                    <Text
                      className={`text-sm text-center ${
                        activeRecurrence === "Biweekly"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Biweekly
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="min-h-[48px] w-1/4 pl-2">
                  <TouchableOpacity
                    onPress={() => selectPaymentRecurrence("Monthly")}
                    className={getButtonStyle(activeRecurrence === "Monthly")}
                  >
                    <Text
                      className={`text-sm text-center ${
                        activeRecurrence === "Monthly"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Monthly
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="min-h-[48px] w-1/4 pl-2">
                  <TouchableOpacity
                    onPress={() => selectPaymentRecurrence("Customize")}
                    className={getButtonStyle(activeRecurrence === "Customize")}
                  >
                    <Text
                      className={`text-sm text-center ${
                        activeRecurrence === "Customize"
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      Customize
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View className="mt-6">
              <TouchableOpacity
                onPress={() => setOverview("complete payment")}
                disabled={!activeAmount || !activeRecurrence}
                className={`rounded-lg p-4 items-center mt-6 ${
                  !activeAmount || !activeRecurrence
                    ? "bg-[#A761B6] opacity-50"
                    : "bg-[#A761B6]"
                }`}
              >
                <Text
                  className={`text-white text-lg font-bold ${
                    !activeAmount || !activeRecurrence ? "opacity-50" : ""
                  }`}
                >
                  Confirm Payment
                </Text>
              </TouchableOpacity>

              <Text className="text-xl font-bold pt-14">Repayment History</Text>
              {/* Insert bar chart component here */}
              <View className="flex-col w-full">
                <View className="flex-1 flex-row justify-start items-start w-full my-2">
                  <DoughnutChart data={DoughnutChartData} />
                  <View className="h-full justify-center pl-6">
                    <Legend data={DoughnutChartData} />
                  </View>
                </View>
                <MonthBarChart data={data} />
              </View>
            </View>
            <Text className="text-xl font-bold pt-4">Future payment dates</Text>
          </View>
          <InfoList info={transactions} />
        </>
      );
    } else if (overview === "complete payment") {
      return (
        <>
          <View className="pt-4 px-6">
            <View className="flex-1 flex-col">
              {/* Amount field */}
              <View className="mb-4">
                <Text className="text-lg mb-2 font-semibold">Amount</Text>
                <TextInput
                  className="border border-gray-300 p-2 rounded-md h-12 w-full"
                  placeholder=""
                  value={activeAmount}
                  onChangeText={setActiveAmount}
                />
              </View>

              {/* Frequency Field */}
              <View className="mb-4">
                <Text className="text-lg mb-2 font-semibold">Frequency</Text>
                <View className="flex-row min-h-[48px] w-full">
                  <View className="min-h-[48px] w-full">
                    <CustomDropdown
                      data={frequencyData}
                      selectedValue={activeRecurrence}
                      onSelect={setActiveRecurrence}
                      placeholder=""
                    />
                  </View>
                </View>
              </View>

              {/* Schedule Payment Field */}
              <View className="mb-4">
                <Text className="text-lg mb-2 font-semibold">
                  Schedule Payment
                </Text>
                <View className="flex-row min-h-[48px] w-full">
                  <View className="min-h-[48px] w-full">
                    <CustomDropdown
                      data={scheduleData}
                      selectedValue={schedulePayment}
                      onSelect={setSchedulePayment}
                      placeholder=""
                    />
                  </View>
                </View>
              </View>

              {/* Schedule Payment Field */}
              <View className="mb-4">
                <Text className="text-lg mb-2 font-semibold">From Account</Text>
                <View className="flex-row min-h-[48px] w-full">
                  <View className="min-h-[48px] w-full">
                    <CustomDropdown
                      data={accountData}
                      selectedValue={account}
                      onSelect={setAccount}
                      placeholder=""
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity className="mb-4">
                <Text className="text-black text-right underline text-lg font-bold">
                  Add new payment method
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setPaymentAndNavigate()}
                disabled={
                  !activeAmount ||
                  !activeRecurrence ||
                  !schedulePayment ||
                  !account
                }
                className={`rounded-lg p-4 items-center mt-6 ${
                  !activeAmount ||
                  !activeRecurrence ||
                  !schedulePayment ||
                  !account
                    ? "bg-[#A761B6] opacity-50"
                    : "bg-[#A761B6]"
                }`}
              >
                <Text
                  className={`text-white text-lg font-bold ${
                    !activeAmount ||
                    !activeRecurrence ||
                    !schedulePayment ||
                    !account
                      ? "opacity-50"
                      : ""
                  }`}
                >
                  Pay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    }
  };

  return (
    <ScrollView className="bg-white flex-1">
      <View className="">
        <View className="bg-[#A761B633] p-4">
          <View className="flex-row justify-between">
            <View className="flex-1">
              <View className="flex-row">
                <Icon
                  name={getIconName(loan.category)}
                  size={30}
                  color="#031556"
                />

                <Text className="text-xl text-[#031556] mb-2 ml-2">
                  {loan.type}
                </Text>
              </View>

              <Text className="text-5xl font-bold text-[#031556] my-4 text-left">
                {loan.amount}
              </Text>
            </View>
          </View>
          <View className="flex-row justify-between">
            <View className="flex-1">
              <Text className="text-[#031556]">Amount due</Text>
              <Text className="text-[#031556] font-bold">{loan.amountDue}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-[#031556]">Rate</Text>
              <Text className="text-[#031556] font-bold">{loan.rate}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-[#031556] text-right">Due date</Text>
              <Text className="text-[#031556] font-bold text-right">
                {loan.dueDate}
              </Text>
            </View>
          </View>
        </View>

        <View>{renderOverview()}</View>
      </View>
    </ScrollView>
  );
};

export default LoanDetails;
