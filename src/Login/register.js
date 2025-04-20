import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./signup.css";
import { Shopping } from "../Utils/pic";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User signed up:", userCredential.user);
            alert("Signup successful!");
        } catch (error) {
            console.error("Signup error:", error.message);
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-6">
                    <img src={Shopping} alt="Shopping" className="signup-image" />
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 m-auto position-relative">
                    <form className="custom-form" onSubmit={handleSignup}>
                        <h5>Sign Up</h5>
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
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

