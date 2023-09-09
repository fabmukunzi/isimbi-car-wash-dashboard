import LoginPage from "../components/auth/login";
import AuthLayout from "../layouts/auth";
const Login=()=> {
  return (
    <div className="App">
    <AuthLayout>
      <LoginPage />
    </AuthLayout>
  </div>
  )
}

export default Login
