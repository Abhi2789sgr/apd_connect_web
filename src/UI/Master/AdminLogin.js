import React from 'react'
import './AdminStyle.css';
// import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    // const history = useNavigate();

    return (
        <div className="container">
            <img className="wave" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png" alt='img'></img>
            <div className="container">
                <div className="img">
                    <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/bg.svg" alt='img'></img>
                </div>
                <div className="login-content">
                    <form action='/home'>
                        <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" alt='img'></img>
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Username</h5>
                                <input type="text" className="input"></input>
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Password</h5>
                                <input type="password" className="input"></input>
                            </div>
                        </div>
                        <a href="/register">Forgot Password?</a>
                        <input type="submit" className="btn" value="Login"></input>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default AdminLogin;