import styled from '@emotion/styled'
import { Form } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


// export const LabelText = styled.div`
//     font-size: 20px;

// `
export const AddContactBtn = styled(Button)`
margin-top: 15px;
margin-bottom: 10px;
    width:fit-content;
`

// export const ButtonForm = styled.button`
//     display: block;
//     background-color: #fff;
//     border: 1px grey solid;
//     border-radius: 4px;
//     padding: 5px;

//     :hover {
//         background-color: #337ff8;
//         color: #fff;
//     }
   
// `

// export const Label = styled.label`
   
//     display: block;
//     margin-bottom: 20px;
// `
// export const FormComponent = styled(Form)`

//     border: black 1px solid;
//     padding: 20px;
//     width: 300px;
//     /* margin-top: 400px; */
// `

export const FormComponent = styled.form`

    display: flex;
    flex-direction: column;

    border: #b7b7b7 1px solid;
    border-radius: 4px;
    padding: 20px;
    width: 400px;
    height: 700px;
    /* margin-top: 50px; */
    /* margin-top: 400px; */
`

export const ContactsField = styled(TextField)`
    margin-bottom: 20px;
`