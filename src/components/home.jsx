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
            <div className="home-message">
                <p>So, you want to travel to</p>
                <span>Space</span>
                <p>let's face it if you want to go to space you might as well <br />
                genuinely go to outer space and not hover kind of on the <br />
                edge of it. Well sit back and relax because we'll give you <br />
                a truly out of this world experience!
                </p>
            </div>
            <div className="home-btn">
                <div className="circle"><span>Explore</span></div>
            </div>
            </section>
        </div>
    );
}

export default Home;