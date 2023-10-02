import SignupPage from "../components/auth/signup";
import AuthLayout from "../layouts/auth";
const SignUp=()=> {
  return (
    <div className="App">
    <AuthLayout>
      <SignupPage />
    </AuthLayout>
  </div>
  )
}

export default SignUp
