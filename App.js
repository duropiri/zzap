import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import EligibilityForm from "./pages/Eligibility";
import EligibilitySuccess from "./pages/EligibilitySuccess";
import ClientInfo from "./pages/ClientInfo";
import CreateEmail from "./pages/CreateEmail";
import Loans from "./pages/Loans";

const Stack = createNativeStackNavigator();

export default function App() {
  // Function to handle the press on the menu icon
  const handleMenuPress = () => {
    // Logic to open the drawer or menu goes here
    console.log("Menu icon pressed");
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Header onMenuPress={handleMenuPress} />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }} // Assuming you want to hide the default header
          />
          {/* Define other screens here */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Eligibility"
            component={EligibilityForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EligibilitySuccess"
            component={EligibilitySuccess}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ClientInfo"
            component={ClientInfo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateEmail"
            component={CreateEmail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Loans"
            component={Loans}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
