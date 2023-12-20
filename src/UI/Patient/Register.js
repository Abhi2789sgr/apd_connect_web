// import React, { useState } from 'react'
// import axios from "axios";
import './RegisterStyle.module.css';
// import { useNavigate } from "react-router-dom";

const Register = () => {
    return (
        <div class="container">
            <div class="title">Registration</div>
            <form action="#">
                <div class="user__details">
                    <div class="input__box">
                        <span class="details">Full Name</span>
                        <input type="text" placeholder="E.g: John Smith" required></input>
                    </div>
                    <div class="input__box">
                        <span class="details">Username</span>
                        <input type="text" placeholder="johnWC98" required></input>
                    </div>
                    <div class="input__box">
                        <span class="details">Email</span>
                        <input type="email" placeholder="johnsmith@hotmail.com" required></input>
                    </div>
                    <div class="input__box">
                        <span class="details">Phone Number</span>
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" required></input>
                    </div>
                    <div class="input__box">
                        <span class="details">Password</span>
                        <input type="password" placeholder="********" required></input>
                    </div>
                    <div class="input__box">
                        <span class="details">Confirm Password</span>
                        <input type="password" placeholder="********" required></input>
                    </div>

                </div>
                <div class="gender__details">
                    <input type="radio" name="gender" id="dot-1"></input>
                    <input type="radio" name="gender" id="dot-2"></input>
                    <input type="radio" name="gender" id="dot-3"></input>
                    <span class="gender__title">Gender</span>
                    <div class="category">
                        <label for="dot-1">
                            <span class="dot one"></span>
                            <span>Male</span>
                        </label>
                        <label for="dot-2">
                            <span class="dot two"></span>
                            <span>Female</span>
                        </label>
                        <label for="dot-3">
                            <span class="dot three"></span>
                            <span>Prefer not to say</span>
                        </label>
                    </div>
                </div>
                <div class="button">
                    <input type="submit" value="Register"></input>
                </div>
            </form>
        </div>
    )
}

export default Register