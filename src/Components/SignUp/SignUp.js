import React, { useState } from 'react';

const SignUp = () => {

    const [ userName, setUserName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const formValidation = (event) => {
        event.preventDefault();
        if (userName !== "" || email !== "" || password !== "") {
            alert('true');
        } else {
            alert('false');
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

                    <label>Age:</label>
                    <input type="radio" id="under_13" value="under_13" name="user_age" /><label for="under_13" class="light">Under 13</label><br/>
                    <input type="radio" id="over_13" value="over_13" name="user_age" /><label for="over_13" class="light">13 or older</label>
                </fieldset>

                <button className="signup" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;