import React from "react";

import "../style/Login.css"
function SignIn()
{
    return (
    <>

    <div className="container">
        <div className="main-logo">
            <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="" />
        </div>
        <div className="login-container">
            <div className="login-form">
                <form action="">
                    <label htmlFor="">Email</label><br />
                    <input type="Email" /><br/>
                    <label htmlFor="">Password</label><br />
                    <input type="password" /><br />
                    <input type="checkbox" />
                    <label htmlFor="">Remember Me</label><br />
                    <label htmlFor="">Forgent Password</label>
                    <input type="submit" name="SignIn" value={"signIn"}/>

                </form>
            </div>
        </div>
    </div>
    </>
    )

}
export default SignIn