import React from "react";
import { View } from "react-native";

const ProgressBar = ({ totalSteps, currentStep }) => {
  return (
    <View className="flex-row justify-center items-center my-5">
      {Array.from({ length: totalSteps }, (_, index) => (
        <React.Fragment key={index}>
          {/* Step indicator */}
          <View
            className={`h-5 w-5 rounded-full mx-1 ${
              index == currentStep - 1 ? "bg-[#FF7347]" : "bg-gray-300"
            }`}
          />
          {/* Line between indicators, except after the last step */}
          {index < totalSteps - 1 && (
            <View
              className={`flex-grow h-1 rounded-lg ${
                index === currentStep - 2 || index === currentStep - 1 ? "bg-[#FF734766]" : "bg-gray-300"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </View> 
  );
};

export default ProgressBar;
