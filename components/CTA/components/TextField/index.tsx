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
    &:hover {
      border-color: #fff;
    }
  }

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
  }

  input {
    color: #fff;
    height: 30px;
    padding-bottom: 2px;
    border-color: #fff;
  }

  label {
    color: #fff;
    &.Mui-focused {
      color: #fff;
    }
  }
`;

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return <StyledTextField variant="standard" fullWidth {...props} />;
};

export default TextField;
