import React from "react"
import "./signup.css"

const Signup = (props) => {
    const {user, email, setemail, password, setpassword, handlelogin, handlesignup, hasaccount, sethasaccount, emailerror, passworderror } = props;
    return (
        <div className="container" id="main">
            <div className="content">
                <h1>E-Commerce</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, vel?</p>
            </div>
            <div className="form-container">
                <div className="signin-signup">
                    <div className="sign-in-form" id="form">
                        <h2 className="title">{hasaccount? 'Login':'Sign Up'}</h2>
                        <div className="input-field">
                            <input type="text" required value={email} onChange={e => { setemail(e.target.value) }} placeholder="Username" />
                        </div>
                        <p className="errormsg">{emailerror}</p>
                        <div className="input-field">
                            <input type="password" required value={password} onChange={e => { setpassword(e.target.value) }} placeholder="Password" />
                        </div>
                        <p className="errormsg">{passworderror}</p>
                        {
                            hasaccount? 
                            (
                                <>
                                <button id="btn" onClick={handlelogin} className="solid"><a href={user==='' ? '#' :'https://vedant-jain03.github.io/E-commerce-FWeb1/'}>Login</a></button>
                                <p>Don't Have a Account? <span onClick={()=>sethasaccount(!hasaccount)}>Sign Up</span></p>
                                </>
                            ):
                            (
                                <>
                                <button id="btn" onClick={handlesignup} className="solid"><a href={user==='' ? '#' :'https://vedant-jain03.github.io/E-commerce-FWeb1/'}> Sign Up</a></button>
                                <p>Already Have an Account? <span onClick={()=>sethasaccount(!hasaccount)}>Login</span></p>  
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup;