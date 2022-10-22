import Footer from "../Components/Footer";
import Appbar from "../Components/Appbar";
// import Signup from './Signup'
import { Register } from "../Components/Homepage/Authentication/register";

function Login2() {
  return (
    <div className="Login">
      <Appbar />
      <Register />
      <Footer />
    </div>
  );
}
export default Login2;
