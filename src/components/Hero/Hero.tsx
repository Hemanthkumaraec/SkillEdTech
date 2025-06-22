import React from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";
import "./Hero.css"; // Custom CSS for Hero component


const Hero = () => {
    return (
        <div className="hero-container">
            <div className="animated-background">
                <div className="hero-shape hero-shape1"></div>
                <div className="hero-shape hero-shape2"></div>
                <div className="hero-shape hero-shape3"></div>
                <div className="hero-shape hero-shape4"></div>
                <div className="hero-shape hero-shape5"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-subtitle">Welcome to SkillEdTech</h1>
                <p className="hero-description">Empower your learning journey with modern skills</p>
                <button className="hero-button">Get Started</button>
            </div>
        </div>

    );
};

export default Hero;