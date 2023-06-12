import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Redux/bazarSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );

        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignout = () => {
    signOut(auth)
      .then(() => {
        // Toast to confirm Signout
        dispatch(removeUser());
        toast.success("You have Signed Out Sucesfully");
      })
      .error((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex items-center justify-center gap-10">
        <div
          onClick={handleGoogleLogin}
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center 
        justify-center gap-2 hover:border-blue-600 hover:bg-blue-600 hover:text-white 
         cursor-pointer duration-300"
        >
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt="googlelogo"
            className="w-8"
          />
          <span>Log in with Google</span>
        </div>

        <button
          onClick={handleGoogleSignout}
          className="bg-black text-white py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300"
        >
          Sign Out
        </button>
      </div>

      <div className="w-full flex items-center justify-center gap-10">
        <div
          className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center 
        justify-center gap-2 hover:border-blue-600 hover:bg-blue-600 hover:text-white 
         cursor-pointer duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="googlelogo"
            className="w-8"
          />
          <span>Log in with Google</span>
        </div>

        <button className="bg-black text-white py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">
          Sign Out
        </button>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
