import { useDispatch } from "react-redux"
import { LoginButton, LoginLabel, StyledLoginForm } from "./LoginForm.styled"
import { logInFetch } from "../../redux/auth/authOperations"
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
// import { trackEvents } from "components/trackEvents";
// import { toast, ToastContainer } from 'react-toastify';

export const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
         e.preventDefault()
        const form = e.currentTarget;

        // if (form.elements.email.value === '' &&  form.elements.password.value === '') {
        //     toast.error('You entered an incorrect password or login');
        // }
        dispatch(logInFetch({
            email: form.elements.email.value,
            password: form.elements.password.value
        }))
      
//         <script type="text/javascript">
//         $('#addToCartButton').click(function() {
        // fbq('track', 'Purchase', {currency: "USD", value: 30.00});
//         });
//         </script>
        // trackEvents();
        
        form.reset()
    }

    return (
        <StyledLoginForm onSubmit={handleSubmit}>
            <LoginLabel>
                
                <TextField
                    type="email"
                    name="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />
            </LoginLabel>
            <LoginLabel>
                
                <TextField
                    type="password"
                    name="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"/>
            </LoginLabel>
            {/* <LoginButton type="submit">Log In</LoginButton> */}
            <LoginButton variant="contained" type="submit">Log In <LoginIcon style={{width: '20px', marginLeft: '5px'}}/></LoginButton>
            
        </StyledLoginForm>
    )
}
