import React from "react";
import "./HomeStyle.css"

const Home = () => {
    return (
        <div className="body">
            <div className="container">
                <header className="header">
                    <a href="hj" className="logo">Connecto</a>
                    <div className="header-right">
                        <img src={require("./../images/Screenshot 2023-07-24 172147.png")} alt="MITRA" class="image"></img>
                    </div>
                    <div className="header-middle">
                        <h3>AUTOMATED PERITONEAL DIALYSIS (m.CYCLER) MANAGEMENT SYSTEM</h3>
                    </div>
                </header>
                <div className="content">
                    <div className="virtical-navbar">
                        <ul>
                            <div className="navbar">
                                <li><a href="/register">ADMINSTRATION</a></li>
                            </div>
                            <div className="navbar">
                                <li><a href="#news">INSTALLATION</a></li>
                            </div>
                            <div className="navbar">
                                <li><a href="#contact">PRESCRIPTION</a></li>
                            </div>
                            <div className="navbar">
                                <li><a href="#about">REPORTS</a></li>
                            </div>
                            <div className="navbar">
                                <li><a href="#about">SERVICE REQUEST</a></li>
                            </div>
                            <div className="navbar">
                                <li><a href="#about">PATIENT SUPPORT</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className="form">
                        <img src={require('../images/Screenshot 2023-07-25 131336.png')} alt="jgc" className="picture"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;