import React from "react";
import '../styles/home.css';

function Home() {
    return (
        <div className="home">
            <div className="home-nav-container">
                <img src={`${process.env.PUBLIC_URL}/assets/shared/logo.svg`} alt="logo" />
                <div className="nav-line"></div>
            <nav className="home-nav">
                <a href="">00 Home</a>
                <a href="">01 Destination</a>
                <a href="">02 Crew</a>
                <a href="">03 Technology</a>
            </nav>
            </div>

            <section className="home-hero-container">
            <div className="home-message"></div>
            <div className="home-btn"></div>
            </section>
        </div>
    );
}

export default Home;