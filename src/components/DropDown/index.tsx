import React from 'react';

// packages
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// types
import { DropDownProps } from './type';

const DropDown = ({
  label,
  dropDownItems,
  containerStyle,
  onChange,
  name,
}: DropDownProps) => {
  return (
    <FormControl
      fullWidth
      sx={{
        marginTop: '16px',
        marginBottom: '8px',
      }}
      className={containerStyle}
    >
      <InputLabel
        sx={{
          color: 'var(--primary-400)',
          '&.Mui-focused': {
            color: 'var(--secondary-700)',
          },
        }}
        id='demo-simple-select-label'
      >
        {label}
      </InputLabel>
      <Select
        name={name}
        labelId='demo-simple-select-label'
        sx={{
          '& .MuiSelect-select.MuiSelect-select': {
            paddingRight: '0px',
          },
          '& .MuiInputBase-input': {
            color: 'var(--primary-400)',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--primary-400)',
          },

          '& .MuiSvgIcon-root': {
            color: 'var(--primary-400)',
          },
          '&:hover': {
            '&& fieldset': {
              borderColor: 'var(--secondary-700)',
            },
          },
          '&.Mui-focused': {
            '&& fieldset': {
              borderColor: 'var(--secondary-700)',
            },
          },
        }}
        fullWidth
        label={label}
        onChange={(e: SelectChangeEvent) => onChange(e.target.value)}
      >
        {dropDownItems.map((item, index) => {
          return (
            <MenuItem key={item.name + index} value={item.value}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropDown;
