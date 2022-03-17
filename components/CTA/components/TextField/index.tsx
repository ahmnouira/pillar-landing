import { styled, TextField as MuiTextField, TextFieldProps } from '@mui/material';
import React from 'react';

const StyledTextField = styled(MuiTextField)`
  &.MuiInputBase-root {
    color: #fff;
    &.MuiInput-root {
      color: #fff;
      height: 30px;
      color: #fff;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      font-family: 'IBM Plex Sans';
      margin-bottom: 24px;
    }
  }

  /*
  & .MuiInput-underline {
    border-color: #fff;
    &::after {
      border-color: #fff;
    }
    &::before {
      border-color: #fff;
    }
    &:active {
      border-color: #fff;
    }
    &:hover {
      border-color: #fff;
    }
  }*/

  input {
    color: #fff;
    height: 30px;
    padding-bottom: 2px;
  }

  label {
    color: #fff;
    &.Mui-focused {
      color: #fff;
    }
  }
`;

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return (
    <div style={{ borderBottom: '1px solid white' }}>
      <StyledTextField
        variant="standard"
        fullWidth
        color="secondary" // just force to white color
        InputProps={{
          required: true,
          disableUnderline: true,
        }}
        {...props}
      />
    </div>
  );
};

export default TextField;
