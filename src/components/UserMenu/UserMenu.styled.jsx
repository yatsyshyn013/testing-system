import styled from "@emotion/styled";
import Button from '@mui/material/Button';


export const UserMenuStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const UserMenuButton = styled(Button)`
    width: fit-content;
    height: 30px;
    margin-left: 20px;
    margin-right: 20px;
`

export const WelcomeText = styled.p`
    color: black;
    font-weight: 600;
    text-decoration: none;
`