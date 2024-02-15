import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TransactionList from "../components/TransactionList";
import LoanDetailsList from "../components/LoanDetailsList";
import BarChart from "../components/charts/BarChart";

const LoanDetails = ({ navigation, route }) => {
  // Assume loan details are passed via route.params for this example
  const { loan } = route.params;
  const [view, setView] = useState("transactionHistory"); // 'transactionHistory' or 'loanDetails'

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

  // Toggle view function
  const toggleView = (selectedView) => {
    setView(selectedView);
  };

  const chartData = [
    { label: "Mon", value: 200, color: "#FF73472E" },
    { label: "Tue", value: 300, color: "#FF73472E" },
    { label: "Wed", value: 150, color: "#FF73472E" },
    { label: "Thu", value: 400, color: "#FF73472E" },
    { label: "Fri", value: 600, color: "#FF73472E" },
    // ... other data points
  ];

  // Sample data - this should come from your state or props
  const transactions = [
    { id: 1, date: "Wed Nov 16, 2022", amount: "$600.00" },
    { id: 2, date: "Wed Nov 16, 2022", amount: "$600.00" },
    { id: 3, date: "Wed Nov 16, 2022", amount: "$600.00" },
    { id: 4, date: "Wed Nov 16, 2022", amount: "$600.00" },
    { id: 5, date: "Wed Nov 16, 2022", amount: "$600.00" },
    { id: 6, date: "Wed Nov 16, 2022", amount: "$600.00" },
    { id: 7, date: "Wed Nov 16, 2022", amount: "$600.00" },
    { id: 8, date: "Wed Nov 16, 2022", amount: "$600.00" },
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

  const renderContent = () => {
    if (view === "transactionHistory") {
      return <TransactionList transactions={transactions} />;
    } else if (view === "loanDetails") {
      return <LoanDetailsList details={loanDetailsData} />;
    } else {
      // Default view or another view can be returned
      return <Text>Option Doesn't Exist</Text>;
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

        <View className="p-4">
          <View className="px-4">
            <TouchableOpacity
              onPress={() => {
                /* handle payment logic */
              }}
              className="bg-[#A761B6] rounded-lg p-4 items-center"
            >
              <Text className="text-white text-lg font-bold">Make Payment</Text>
            </TouchableOpacity>

            <Text className="text-xl font-bold py-4">Account review</Text>
            {/* Insert bar chart component here */}
            <BarChart data={chartData} />
          </View>
        </View>

        <View className="flex-row min-h-[40px] w-full mt-4">
          <View className="min-h-[40px] w-1/2">
            <TouchableOpacity
              onPress={() => toggleView("transactionHistory")}
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
              onPress={() => toggleView("loanDetails")}
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
        <View className="py-2">{renderContent()}</View>
      </View>
    </ScrollView>
  );
};

export default LoanDetails;
