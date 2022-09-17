import React from 'react';

// packages
import { styled } from '@mui/material/styles';
import { FormControl, FormHelperText, TextField } from '@mui/material';

type InputProps = {
  label: string;
  required?: boolean;
  className?: string;
  type?: string;
  name?: string;
  error?: boolean;
  errorMessage?: string;
};

const Input = ({
  type,
  name,
  label,
  error,
  required,
  className,
  errorMessage,
}: InputProps) => {
  // custom styled Textfield
  const CustomInput = styled(TextField)({
    '& .MuiFormLabel-root': {
      color: 'var(--primary-400)',
    },
    '& .MuiInputBase-input': {
      color: 'var(--primary-400)',
    },
    '& label.Mui-focused': {
      color: 'var(--secondary-700)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--primary-400)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--primary-400)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--secondary-700)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--secondary-700)',
      },
    },
    '& .MuiFormHelperText-root': {
      color: 'var(--secondary-900)',
      fontSize: 'var(--p)',
    },
  });

  return (
    <FormControl fullWidth>
      <CustomInput
        type={type}
        name={name}
        error={error}
        label={label}
        required={required}
        className={className}
        helperText={errorMessage}
        color='error'
        fullWidth
        margin='normal'
      />
    </FormControl>
  );
};

export default Input;
