import React from 'react';

// packages
import { FormControl, InputAdornment, TextField } from '@mui/material';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';

type InputProps = {
  label: string;
  required?: boolean;
  className?: string;
  type?: string;
  name: string;
  error?: boolean;
  errorMessage?: string;
  register?: any;
  control: Control<FieldValues, any>;
};

const Input = ({
  type,
  name,
  label,
  required,
  className,
  errorMessage,
  control,
}: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <>
      <FormControl fullWidth>
        <Controller
          name={name}
          control={control}
          render={({
            field: { name, value, onChange, onBlur, ref },
            fieldState: { error },
          }) => {
            return (
              <TextField
                sx={{
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
                }}
                type={
                  type === 'password'
                    ? showPassword
                      ? 'text'
                      : 'password'
                    : type
                }
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                inputRef={ref}
                error={error?.message ? true : false}
                label={label}
                required={required}
                className={className}
                helperText={errorMessage}
                color='error'
                fullWidth
                margin='normal'
                InputProps={{
                  endAdornment: type === 'password' && (
                    <InputAdornment
                      sx={{
                        color: 'var(--primary-400)',
                        cursor: 'pointer',
                      }}
                      position='end'
                    >
                      {showPassword ? (
                        <VisibilityOff
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <Visibility
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            );
          }}
        />
      </FormControl>
    </>
  );
};

export default Input;
