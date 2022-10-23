import Footer from "../Components/Footer";
import {LoginPage} from "../Components/Homepage/Authentication/Login_Page";
import Appbar from "../Components/Appbar";
function Login() {
  return (
    <div className="Login">
      <Appbar />
      <LoginPage />
      <Footer />
    </div>
  );
}
export default Login;
