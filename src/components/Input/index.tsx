import React from 'react';

// packages
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

type InputProps = {
  label: string;
  required?: boolean;
  className?: string;
  type?: string;
  name?: string;
  error?: boolean;
  helperText?: string;
};

const Input = ({
  label,
  required,
  className,
  type,
  name,
  error,
  helperText,
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
      color: 'var(--primary-400)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'var(--primary-400)',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'var(--primary-400)',
      },
      '&:hover fieldset': {
        borderColor: 'var(--primary-400)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--primary-400)',
      },
    },
  });

  return (
    <CustomInput
      type={type}
      name={name}
      error={error}
      label={label}
      required={required}
      className={className}
      helperText={helperText}
      fullWidth
      color='error'
      margin='normal'
    />
  );
};

export default Input;
