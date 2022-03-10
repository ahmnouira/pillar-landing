import {
  styled,
  TextField as MuiTextField,
  TextFieldProps,
  textFieldClasses,
  outlinedInputClasses,
  inputClasses,
  inputLabelClasses,
} from '@mui/material';
import React from 'react';

const StyledTextField = styled(MuiTextField)`
  height: 15px;
  & .MuiInput-underline:hover {
    border-color: #fff;
  }

  & .MuiInput-underline:after {
    border-color: #fff;
  }

  & .MuiInput-underline:before {
    border-color: #fff;
  }

  input {
    color: white;
    font-size: 15px;
  }

  label {
    color: #fff;
    &.Mui-focused {
      color: #fff;
    }
  }
`;

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return <StyledTextField fullWidth {...props} />;
};

export default TextField;
