import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onMenuPress }) => {
  return (
    <View className="flex-row items-center justify-between px-4 py-2 h-16">
      <TouchableOpacity onPress={onMenuPress}>
        <FontAwesomeIcon icon={faBars} size={24} />
      </TouchableOpacity>
      <Text className="text-xl font-bold">zzzap</Text>
      {/* Placeholder for right side of the header, if needed */}
      <View />
    </View>
  )
}

export default Header