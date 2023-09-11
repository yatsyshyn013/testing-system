
import { Header } from "../SharedLayout/SharedLayout.styled"
import { Navigation } from "../Navigation/Navigation";
import { useAuth } from "../../hooks/useAuth";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";

export const AppBar = () => {
    const {isLoggedIn} = useAuth()
    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </Header>
    )
}