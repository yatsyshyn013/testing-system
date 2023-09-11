import { StyledLinks } from "../SharedLayout/SharedLayout.styled"

export const AuthNav = () => {
    return (<div>
        <StyledLinks to='/login'>Log In</StyledLinks>
        <StyledLinks to='/register'>Register</StyledLinks>
    </div>)
}