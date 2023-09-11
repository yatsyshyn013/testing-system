import { useDispatch } from "react-redux"
import { Label, RegisterButton, StyledRegisterForm } from "./RegisterForm.styled"
import { registerFetch } from "../../redux/auth/authOperations";
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


export const RegisterForm = () => {

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.currentTarget;
        dispatch(registerFetch({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        }))
        form.reset()
    }

    return (
        <StyledRegisterForm onSubmit={handleSubmit} >
             <Label >
                
                <TextField
                    type="text"
                    name="name"
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"/>
            </Label>
            <Label>
                
                <TextField
                    
                    type="email"
                    name="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />
            </Label>
            <Label>
                
                <TextField
                    type="password"
                    name="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                
                />
            </Label>
            <RegisterButton type="submit" variant="contained" >Register <PermContactCalendarIcon style={{width: '20px', marginLeft: '5px'}}/></RegisterButton>
        </StyledRegisterForm>
    )
}