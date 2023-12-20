import React from 'react'
import './Style.css';

const Login = () => {



    return (
        <div className="container">
            <head>
                <title>Glassmorphism login Form Tutorial in html css</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet"></link>
                <link href='./Style.css' rel='stylesheet'></link>
            </head>
            <body>
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <form>
                    <h3>Login Here</h3>
                    <label for="username">Username</label>
                    <input type="text" placeholder="Email or Phone" id="username"></input>

                    <label for="password">Password</label>
                    <input type="password" placeholder="Password" id="password"></input>

                    <button>Log In</button>
                    <div className="social">
                        <div className="go"><i className="fab fa-google"></i>  Google</div>
                        <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                    </div>                   
                </form>
            </body>
        </div>
    )
}

export default Login;