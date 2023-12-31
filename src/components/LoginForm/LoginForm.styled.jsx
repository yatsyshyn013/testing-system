import styled from "@emotion/styled";
import Button from "@mui/material/Button";
// import TextField from '@mui/material/TextField';

export const StyledLoginForm = styled.form`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const LoginButton = styled(Button)`
  width: fit-content;
`;

export const RegisterInput = styled.input`
  /* margin-bottom: 20px; */
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
