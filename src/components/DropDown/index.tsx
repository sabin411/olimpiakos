import React from 'react';

// packages
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// types
import { DropDownProps } from './type';
import { FormHelperText } from '@mui/material';

const DropDown = ({
  name,
  label,
  error,
  register,
  dropDownItems,
  containerStyle,
  errorMessage,
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
        {...register(name)}
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
        error={error}
      >
        {dropDownItems.map((item, index) => {
          return (
            <MenuItem key={item.name + index} value={item.value}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText
        sx={{
          color: 'var(--secondary-900)',
          fontSize: 'var(--p)',
        }}
      >
        {errorMessage}
      </FormHelperText>
    </FormControl>
  );
};

export default DropDown;
