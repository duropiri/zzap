import { View, Text } from 'react-native'
import React from 'react'

const InfoCard = ({ title, content }) => {
  return (
    <View className="m-4 p-4 rounded-lg border-2 border-pink-100 bg-white h-52 justify-center items-center">
      <Text className="text-2xl mb-2 text-center">{title}</Text>
      <Text className="text-black text-center">{content}</Text>
    </View>
  )
}

export default InfoCard