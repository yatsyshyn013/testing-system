import styled from '@emotion/styled'
import { Form } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export const AddTestBtn = styled(Button)`
margin-top: 15px;
margin-bottom: 10px;
    width:fit-content;
`


export const TestComponent = styled.form`

    display: flex;
    flex-direction: column;

    border: #b7b7b7 1px solid;
    border-radius: 4px;
    padding: 20px;
    width: 400px;
    height: 700px;
`

export const TestsField = styled(TextField)`
    margin-bottom: 20px;
`