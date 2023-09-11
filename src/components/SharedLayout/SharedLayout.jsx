import { Suspense } from "react";
import { Outlet} from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";
import CircularProgress from '@mui/material/CircularProgress';

const SharedLayout = () => {
    return <div>
        <AppBar/>
         <Suspense fallback={<CircularProgress style={{marginRight:'auto', marginLeft:'auto'}}/>}>
          <Outlet />
        </Suspense>
    </div>
}

export default SharedLayout