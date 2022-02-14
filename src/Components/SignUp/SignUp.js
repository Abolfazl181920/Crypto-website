import React from 'react';

const SignUp = () => {
    return (
        <div className="signup_body">
            <form className="signup_form" action="index.html" method="post">
                <h1 className="signup_title">Sign Up</h1>
                <fieldset>
                    <legend><span class="number">1</span> Your basic info</legend>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="user_name" />

                    <label for="mail">Email:</label>
                    <input type="email" id="mail" name="user_email" />

                    <label for="password">Password:</label>
                    <input type="password" id="password" name="user_password" />

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