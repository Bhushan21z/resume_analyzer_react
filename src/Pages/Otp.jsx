import Footer from "../Components/Footer";
import { OtpEnter } from "../Components/Homepage/Authentication/enterotp";
import Appbar from "../Components/Appbar";

function Otp() {
  return (
    <div className="Login">
      <Appbar />
      <OtpEnter />
      <Footer />
    </div>
  );
}
export default Otp;
