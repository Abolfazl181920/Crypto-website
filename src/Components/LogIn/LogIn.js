import React from 'react';

const LogIn = () => {

    const formValidation = (event) => {
        event.preventDefault();
    }
    
    return (
        <div className="signup_body">
            <form onSubmit={formValidation} className="signup_form" method="post">
                <h1 className="signup_title">Log In</h1>
                <fieldset>
                    <legend><span class="number">1</span> Your basic info</legend>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="user_name" />

                    <label for="mail">Email:</label>
                    <input type="email" id="mail" name="user_email" />

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="user_password" />
                </fieldset>

                <button className="signup" type="submit">Log In</button>
            </form>
        </div>
    )
}

export default LogIn;