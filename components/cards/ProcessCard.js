import { View, Text } from 'react-native'
import React from 'react'

const ProcessCard = ({ title, description }) => {
  return (
    <View className="m-4 p-4 rounded-lg border-2 border-[#A761B6]">
      <Text className="text-lg font-bold mb-2">{title}</Text>
      <Text className="text-lg">{description}</Text>
    </View>
  )
}

export default ProcessCard