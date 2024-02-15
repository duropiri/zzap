import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import LoanCard from "../components/cards/LoanCard"; // Assuming you have a LoanCard component
import DoughnutChart from "../components/charts/DoughnutChart";
import Legend from "../components/charts/Legend";

const Loans = ({ navigation }) => {
  const [loans, setLoans] = useState([
    {
      id: "1",
      type: "School loan",
      amount: "$22,000",
      amountDue: "$200.00",
      rate: "5%",
      dueDate: "10 Nov 2022",
      category: "Education",
    },
    {
      id: "2",
      type: "Business loan",
      amount: "$22,000",
      amountDue: "$200.00",
      rate: "5%",
      dueDate: "10 Nov 2022",
      category: "Career",
    },
  ]);

  // Assume this is your loans data that will be used to create the doughnut chart
  const chartData = [
    {
      key: "business-loan",
      name: "Business loan",
      amount: "30", // This would be calculated based on the loans data
      svg: { fill: "#C69CCF" },
    },
    {
      key: "school-loan",
      name: "School loan",
      amount: "70", // This would be calculated based on the loans data
      svg: { fill: "#FF734766" },
    },
  ];

  const handlePress = (buttonName) => {
    // You can determine which button was pressed by the argument passed
    switch (buttonName) {
      case "GetLoan":
        console.log("Get Loan button pressed");
        navigation.navigate("Eligibility"); // Use React Navigation's navigate function
        // Handle login logic here
        break;
    }
  };

  const navigateToLoanDetails = (loanData) => {
    navigation.navigate("LoanDetails", { loan: loanData });
  };

  const renderLoanCard = ({ item }) => (
    <LoanCard loan={item} onPress={() => navigateToLoanDetails(item)} />
  );
  const renderLegend = () => <Legend data={chartData} />;

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4 w-full">
        {loans.length > 0 ? (
          <View>
            <FlatList
              data={loans}
              keyExtractor={(item) => item.id}
              renderItem={renderLoanCard}
            />

            <View className="items-right w-full my-2">
              <TouchableOpacity onPress={() => handlePress("ViewAll")}>
                <Text className="text-[#031556] text-right underline">
                  View All
                </Text>
              </TouchableOpacity>
            </View>
            {/* Get New Loan Button */}
            <View>
              <View className="flex-1 justify-start items-center w-full my-2">
                <TouchableOpacity
                  className="bg-[#A761B6] rounded-lg py-2 mb-4 h-12 w-full"
                  onPress={() => handlePress("GetLoan")}
                >
                  <Text className="text-white text-lg font-bold text-center h-12">
                    Get New Loan
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="">
                <Text className="text-2xl font-bold text-start">
                  Your Loans
                </Text>
                <View className="flex-1 flex-row justify-start items-start w-full my-2">
                  <DoughnutChart data={chartData} />
                  <View className="h-full justify-center pl-6">
                    {renderLegend()}
                  </View>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <ScrollView>
            <View className="p-4 w-full h-full">
              <View className="h-16 mb-24 px-4"></View>

              {/* Eligibility Message */}
              <View className="flex-1 justify-center items-center px-4">
                <Text className="text-center text-2xl font-bold mb-16">
                  You currently have no loan
                </Text>
                <Text className="text-center text-2xl w-5/6">
                  Let's get you some money azzap
                </Text>
              </View>

              {/* Get New Loan Button */}
              <View className="flex-1 justify-end items-center mt-8 w-full">
                <TouchableOpacity
                  className="bg-[#A761B6] rounded-lg py-2 mb-4 h-12 w-full"
                  onPress={() => handlePress("GetLoan")}
                >
                  <Text className="text-white text-lg font-bold text-center h-12">
                    Get New Loan
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </ScrollView>
  );
};

export default Loans;
