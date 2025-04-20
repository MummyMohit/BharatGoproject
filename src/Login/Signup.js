import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider,
    signInWithPopup, } from "firebase/auth";
import { auth } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import "./signup.css";
import { Shopping } from "../Utils/pic";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/authSlice";
const SigIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          const user = userCredential.user;
          dispatch(loginSuccess({ uid: user.uid, email: user.email }));
          alert("Login successful!");
          navigate("/main/product");
        } catch (error) {
          console.error("Login error:", error.message);
          alert("Login failed: " + error.message);
        }
      };
    
      const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          const user = result.user;
          dispatch(loginSuccess({ uid: user.uid, email: user.email}));
          alert("Google login successful!");
          navigate("/main/product");
        } catch (error) {
          console.error("Google sign-in error:", error.message);
          alert("Google sign-in failed: " + error.message);
        }
      };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6">
                    <img src={Shopping} className="signup-image" alt="Sign In" />
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 m-auto">
                    <form className="custom-form" onSubmit={handleLogin}>
                        <h5>Sign In</h5>
                        <div>
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="custom-formcontrol mb-3"
                                id="exampleInputEmail1"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="custom-formcontrol mb-3"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Sign In
                        </button>
                    </form>
                  
                    <div className="google-icon">
                          <p> OR</p>
                        <FcGoogle size={40}
                        style={{ cursor: "pointer" }}
                        onClick={handleGoogleSignIn}
                        title="Sign in with Google"
                        />
                        <Link to="/register">Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigIn;

