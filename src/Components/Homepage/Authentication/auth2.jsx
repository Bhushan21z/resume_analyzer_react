// import './Auth.css';
// import {GoogleLogin} from '@react-oauth/google';
// import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Auth() {
  const login = useGoogleLogin({
    onSuccess: async (respose) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${respose.access_token}`,
            },
          }
        );

        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div>
      <button onClick={login}>
        <i class="fa-brands fa-google"></i>
        Continue with google
      </button>
      {/* <GoogleLogin
                    onClick={login}
                    onSuccess={credentialResponse => {
                    console.log(credentialResponse.credential);
                    var decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded)
                }}
                    onError={() => {
                    console.log('Login Failed');
                }}/> */}
    </div>
  );
}

export default Auth;
