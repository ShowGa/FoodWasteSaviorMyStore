import React from "react";
// react icons
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../firebase/firebase";
// react hot toast
import toast from "react-hot-toast";

const GoogleOAuth = () => {
  const auth = getAuth(app);

  // =========================== //
  //      Helper Function
  // =========================== //
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const resultFromFirebase = await signInWithPopup(auth, provider);

      const idToken = await resultFromFirebase.user.getIdToken();

      console.log(idToken);
    } catch (error) {
      toast.error("糟糕!出現了問題。請檢查網路是否連線，或稍後再試。");
      console.log(error);
    }
  };

  return (
    <button className="c-OAuth_btn" onClick={handleGoogleSignIn}>
      <FcGoogle className="text-xl" />
      <span>Continue with Google</span>
    </button>
  );
};

export default GoogleOAuth;
