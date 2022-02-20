import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [ valid, setValid ] = useState(false);
    const [ userName, setUserName ] = useState("Abolfazl");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    let navigate = useNavigate();

    const formValidation = (event) => {
        event.preventDefault();
        if (userName !== "" && email !== "" && password !== "") {
            setValid(true);
        } else {
            setValid(false);
        }

        if (valid) {
            navigate("/login");
        }
    }

    const handleUserName = (event) => {
        setUserName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className="signup_body">
            <form onSubmit={formValidation} className="signup_form" method="post">
                <h1 className="signup_title">Sign Up</h1>
                <fieldset>
                    <legend><span class="number">1</span> Your basic info</legend>
                    <label for="name">Name:</label>
                    <input value={userName} onChange={handleUserName} type="text" id="name" name="user_name" />

                    <label for="mail">Email:</label>
                    <input value={email} onChange={handleEmail} type="email" id="mail" name="user_email" />

                    <label for="password">Password:</label>
                    <input value={password} onChange={handlePassword} type="password" id="password" name="user_password" />
                </fieldset>

                <button className="signup" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;