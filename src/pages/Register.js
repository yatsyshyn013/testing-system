import { RegisterForm } from "../components/RegisterForm/RegisterForm"
import { ToastContainer } from "react-toastify"

const Register = () => {

    return (<div>
        <RegisterForm />
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
/>
    </div>)
    
}

export default Register