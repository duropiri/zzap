import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import ProcessCard from "../components/cards/ProcessCard";
import TestimonialCard from "../components/cards/TestimonialCard";
import InfoCard from "../components/cards/InfoCard";
import Accordion from "../components/Accordion";

const Home = ({ navigation }) => {
  const handlePress = (buttonName) => {
    // You can determine which button was pressed by the argument passed
    switch (buttonName) {
      case "login":
        console.log("Login button pressed");
        navigation.navigate('Login'); // Use React Navigation's navigate function
        // Handle login logic here
        break;
      case "get-loan":
        console.log("Get Loan button pressed");
        navigation.navigate('Eligibility');
        break;
      default:
        console.log("Unhandled button press");
    }
  };

  return (
    <ScrollView className="flex w-full">
      {/* Header with menu and title */}
      <View className="relative w-full">
        <ImageBackground
          source={require("../assets/zzap-hero-image.png")}
          resizeMode="cover"
          className="justify-end items-center h-64 w-full"
        >
          {/* Ensure the overlay View takes the full width and centers its children */}
          <View className="flex justify-center w-full h-full">
            {/* Wrap the entire text block in a View to control its width */}
            <View className="p-4 w-1/2 items-center">
              <Text className="text-xl text-center">
                Access a <Text className="font-bold">loan quickly</Text> for
                business, rent, car and more
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Main content area */}
      <View className="flex p-4 w-full">
        {/* Loan access section */}
        <Text className="flex-1 text-lg text-center">
          We are called zzap for a reason! We lend a hand when needed right from
          your screen
        </Text>

        {/* Action buttons */}
        <View className="flex-1 justify-center items-center p-4">
          {/* Filled Button */}
          <TouchableOpacity
            onPress={() => handlePress("login")}
            className="bg-[#A761B6] rounded-lg px-6 py-2 mb-4 h-12 w-full"
          >
            <Text className="text-white font-semibold text-lg text-center">
              Login
            </Text>
          </TouchableOpacity>

          {/* Outlined Button */}
          <TouchableOpacity
            onPress={() => handlePress("get-loan")}
            className="border-2 border-[#A761B6] rounded-lg px-6 py-2 h-12 w-full"
          >
            <Text className="text-black font-semibold text-lg text-center">
              Get Loan
            </Text>
          </TouchableOpacity>
        </View>

        {/* Process steps */}
        <View>
          <ProcessCard
            title="Check eligibility"
            description="Determine loan details and check eligibility"
          />
          <ProcessCard
            title="Apply"
            description="Confirm loan details and share relevant information"
          />
          <ProcessCard
            title="Verify"
            description="Verify your information and upload relevant documents"
          />
          <ProcessCard
            title="Get funds"
            description="Get approved within 1 hour, receive funds"
          />
        </View>

        {/* Testimonials */}
        <View>
          <TestimonialCard
            name="Tomas B"
            testimonial="I got the money same day, unbelievable"
            imageName="user1" // Adjust the path as needed
          />
          <TestimonialCard
            name="Alfrina Alsedo"
            testimonial="The process was seamless, quick and confidential. Thank you zzap"
            imageName="user2" // Adjust the path as needed
          />
          <TestimonialCard
            name="Ade Tinto"
            testimonial="I am glad with the service. I would definitely recommend to people"
            imageName="user3" // Adjust the path as needed
          />
        </View>

        {/* Action buttons */}
        <View className="flex-1 justify-center items-center p-4">
          {/* Filled Button */}
          <TouchableOpacity
            onPress={() => handlePress("login")}
            className="bg-[#A761B6] rounded-lg px-6 py-2 mb-4 h-12 w-full"
          >
            <Text className="text-white font-semibold text-lg text-center">
              Login
            </Text>
          </TouchableOpacity>

          {/* Outlined Button */}
          <TouchableOpacity
            onPress={() => handlePress("get-loan")}
            className="border-2 border-[#A761B6] rounded-lg px-6 py-2 h-12 w-full"
          >
            <Text className="text-black font-semibold text-lg text-center">
              Get Loan
            </Text>
          </TouchableOpacity>
        </View>

        {/* Info Section */}
        <View>
          <InfoCard
            title="Easy and quick process"
            content="No need to visit the bank. Fill the loan application from your device and upload your documents. Get a quick verification and approval after submitting your bank details online"
          />
          <InfoCard
            title="Same day account credit"
            content="Receive the funds within a few hours after applying. Use the funds to meet all your sudden financial challenges without any worry"
          />
          <InfoCard
            title="Easy and simple instalments"
            content="Customize your instalment repayment plans. Repay with your monthly income or more frequently. You can repay the funds between 6-60 months based on loan type and rate"
          />
        </View>

        {/* FAQ Section */}
        <View className="p-4">
          <Text className="text-2xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </Text>
          <Accordion title="Am I eligible?">
            <Text>Content about eligibility.</Text>
          </Accordion>
          <Accordion title="How much can I borrow?">
            <Text>Content about loan amount.</Text>
          </Accordion>
          <Accordion title="What documents do I need?">
            <Text>Content about loan amount.</Text>
          </Accordion>
          <Accordion title="How do I make repayment?">
            <Text>Content about loan amount.</Text>
          </Accordion>
          <Accordion title="How do I get the funds?">
            <Text>Content about loan amount.</Text>
          </Accordion>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
