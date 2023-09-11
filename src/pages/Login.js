
import { LoginForm } from "../components/LoginForm/LoginForm"
import { ToastContainer } from "react-toastify"

const Login = () => {

    return (<div>
        <LoginForm />
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
/>
    </div>)
    
}

export default Login