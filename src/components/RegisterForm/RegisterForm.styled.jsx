import styled from "@emotion/styled";
import Button from '@mui/material/Button';

export const StyledRegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* width: 320px; */
   
    width: 320px;
    margin-top: 30px;
    margin-left: 40px;


`

export const RegisterButton = styled(Button)`
    width: fit-content;
`

// export const RegisterInput = styled.input`
//     /* margin-bottom: 20px; */
// `

export const Label = styled.label`
    display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`