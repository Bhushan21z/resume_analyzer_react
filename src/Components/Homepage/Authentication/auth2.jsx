// import './Auth.css';
// import {GoogleLogin} from '@react-oauth/google';
// import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "@mui/material";
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
      <Button
        onClick={login}
        variant="contained"
        style={{
          padding: "10px",
          width: "auto",
          backgroundColor: "white",
          color: "black",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "20px",
        }}
      >
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          style={{
            width: "30px",
            height: "30px",
            marginRight: "10px",
          }}
        />
        Sign in with Google
      </Button>
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
