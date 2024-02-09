import { View, Text, Image } from 'react-native'
import React from 'react'

const TestimonialCard = ({ name, testimonial, imageName }) => {
  const images = {
    user1: require('../../assets/zzap-testimonial-image-1.png'),
    user2: require('../../assets/zzap-testimonial-image-2.png'),
    user3: require('../../assets/zzap-testimonial-image-3.png'),
    // Add more images as needed
  };

  const imageSource = images[imageName];
  return (
    <View className="m-4 p-4 rounded-lg bg-pink-100 items-center">
      <Image
        source={imageSource}
        className="h-24 w-24 rounded-full mb-4"
        resizeMode="cover"
      />
      <Text className="text-lg font-bold">{name}</Text>
      <Text className="text-sm text-gray-600 mt-2 text-center">{testimonial}</Text>
    </View>
  )
}

export default TestimonialCard