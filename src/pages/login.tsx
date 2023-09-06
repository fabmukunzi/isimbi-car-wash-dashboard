import {Button} from "antd";
import LoginPage from "../components/auth/login";
import AuthLayout from "../layouts/auth";
const Home=()=> {
  return (
    <div className="App">
    <AuthLayout>
      <LoginPage />
    </AuthLayout>
  </div>
  )
}

export default Home
