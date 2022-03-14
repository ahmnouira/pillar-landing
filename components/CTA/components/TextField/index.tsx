import { styled, TextField as MuiTextField, TextFieldProps } from '@mui/material';
import React from 'react';

const StyledTextField = styled(MuiTextField)`
  height: 30px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  font-family: 'IBM Plex Sans';
  margin-bottom: 24px;

  &:hover fieldset {
    border-color: #fff;
  }

  &.MuiInput-root:hover:not(.Mui-disabled):before {
    border-color: #fff;
  }

  & .MuiInput-underline {
    border-color: #fff;
    &::after {
      border-color: #fff;
    }
    &::before {
      border-color: #fff;
    }
    &:hover {
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

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #fff;
    }
    &:hover fieldset {
      border-color: #fff;
    }
    &.Mui-focused fieldset {
      border-color: #fff;
    }
  }
`;

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return <StyledTextField variant="standard" fullWidth {...props} />;
};

export default TextField;
