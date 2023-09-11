import { StyledLinks } from "../SharedLayout/SharedLayout.styled"
import { useAuth } from "../../hooks/useAuth";
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const Navigation = () => {
    const {isLoggedIn} = useAuth()

    return (<nav style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <StyledLinks to='/' end> <HomeIcon /></StyledLinks>
        {isLoggedIn && (
        <StyledLinks to='/contacts'>Tests</StyledLinks>
        )}
    </nav>)
}
