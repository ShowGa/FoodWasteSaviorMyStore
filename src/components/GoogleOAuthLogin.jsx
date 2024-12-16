import React from "react";
// react router
import { useNavigate } from "react-router-dom";
// icons
import { FcGoogle } from "react-icons/fc";
// google auth
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../firebase/firebase";
// service
import AuthService from "../service/authService";
// react hot toast
import toast from "react-hot-toast";
// zustand
import useAuthStore from "../zustand/useAuthStore";
import useAuthJWTStore from "../zustand/useAuthJWTStore";

const GoogleOAuthLogin = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const { loginSetAuthStore } = useAuthStore();
  const { loginSetAuthJWT } = useAuthJWTStore();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const resultFromFirebase = await signInWithPopup(auth, provider);

      const idToken = await resultFromFirebase.user.getIdToken();

      AuthService.firebaseGoogleOAuthLogin(idToken)
        .then((response) => {
          const responseData = response.data.data;
          const { jwt, ...authStoreInfo } = responseData;

          loginSetAuthStore(authStoreInfo);
          loginSetAuthJWT(jwt);

          toast.success("登入成功 !");
          // modify later
          navigate(`/store/${responseData.storeId}/dashboard`);
        })
        .catch((error) => {
          const message =
            error.response?.data.message ||
            "糟糕!伺服器似乎出現了問題，請聯絡客服。";
          toast.error(message);
          console.log(error);
        });
    } catch (error) {
      toast.error("糟糕!出現了問題。請檢查網路是否連線，或稍後再試。");
      console.log(error);
    }
  };

  return (
    <button className="c-OAuth_btn" onClick={handleGoogleSignIn}>
      <FcGoogle className="text-xl" />
      <span>使用 Google 登入</span>
    </button>
  );
};

export default GoogleOAuthLogin;
