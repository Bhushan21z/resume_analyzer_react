import Footer from "../Components/Footer";
import Signin from "../Components/Homepage/Authentication/Signin";
import Appbar from "../Components/Appbar";
function Login() {
  return (
    <div className="Login">
      <Appbar />
      <Signin />
      <Footer />
    </div>
  );
}
export default Login;
