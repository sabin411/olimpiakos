import * as React from 'react';

import Button from '@mui/material/Button';

function ButtonComp({
  variant,
  buttonSize,
  title,
  containerStyle,
  type,
  disabled,
  onClick,
}: {
  variant: 'contained' | 'outlined' | 'text';
  buttonSize: 'small' | 'medium' | 'large';
  title: string;
  containerStyle?: React.CSSProperties;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick?: () => void;
}) {
  // containedButton render
  const ContainedButton = () => (
    <Button
      type={type}
      variant='contained'
      size={buttonSize}
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundColor: 'var(--secondary-800)',
        maxWidth: '220px',
        paddingInline: '3rem',
        ':hover': {
          backgroundColor: 'var(--secondary-700)',
        },
        ...containerStyle,
      }}
    >
      {title}
    </Button>
  );

  // outlinedButton render
  const OutlinedButton = () => (
    <Button
      type={type}
      variant='outlined'
      size={buttonSize}
      disabled={disabled}
      onClick={onClick}
      sx={{
        borderColor: 'var(--secondary-800)',
        color: 'var(--secondary-800)',
        maxWidth: '220px',
        paddingInline: '3rem',
        ':hover': {
          backgroundColor: 'var(--secondary-700)',
          borderColor: 'var(--secondary-700)',
          color: 'var(--neutral-300)',
        },
        ...containerStyle,
      }}
    >
      {title}
    </Button>
  );

  // textButton render
  const TextButton = () => (
    <Button
      type={type}
      variant='text'
      size={buttonSize}
      disabled={disabled}
      onClick={onClick}
      sx={{
        color: 'var(--secondary-800)',
        maxWidth: '220px',
        paddingInline: '3rem',
        ':hover': {
          backgroundColor: 'var(--secondary-700)',
        },
        ...containerStyle,
      }}
    >
      {title}
    </Button>
  );

  switch (variant) {
    case 'contained':
      return <ContainedButton />;
    case 'outlined':
      return <OutlinedButton />;
    case 'text':
      return <TextButton />;
    default:
      return <ContainedButton />;
  }
}

export default ButtonComp;
