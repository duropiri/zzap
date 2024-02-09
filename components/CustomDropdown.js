// CustomDropdown.js
import React from 'react';
import Dropdown from 'react-native-element-dropdown';

const CustomDropdown = ({ data, onSelect, selectedValue, placeholder }) => {
  return (
    <Dropdown
      style={dropdownStyle}
      data={data}
      onSelect={onSelect}
      value={selectedValue}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      placeholderStyle={placeholderStyle}
      selectedTextStyle={selectedTextStyle}
      // Add more props and styling as needed
    />
  );
};

const dropdownStyle = {
  height: 50,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 4,
  paddingHorizontal: 8,
  backgroundColor: 'white',
  // Apply any additional styling as needed
};

const placeholderStyle = {
  color: 'gray',
  // Apply any additional styling as needed
};

const selectedTextStyle = {
  color: 'black',
  // Apply any additional styling as needed
};

export default CustomDropdown;
