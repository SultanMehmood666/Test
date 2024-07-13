// CustomDropdown.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const CustomDropDown = ({ options, selectedOption, onChange }) => {
  return (
    <FormControl>
      <InputLabel id="dropdown-label">Select Option</InputLabel>
      <Select
        labelId="dropdown-label"
        value={selectedOption}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropDown;
