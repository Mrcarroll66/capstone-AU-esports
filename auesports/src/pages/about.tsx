import react from "react";
import "./about.css";
import ow from "../images/Overwatch_2.png";
import lol from "../images/LOL.png";
import rl from "../images/Rocket-League.png";
import val from "../images/valorant.png";
import ft from "../images/fortnite.png";
import cod from "../images/callofduty.png";
import ssmb from "../images/smash.png";
import apex from "../images/apex.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import raven from "../images/raven.png";
import Carousel from "react-bootstrap/Carousel";

function About() {
    return (
        <>
            <header className="webHeader">
                <div className="headerTitles">
                    <span className="headerTitleSm">React & Node</span>
                    <span className="headerTitleLg">Blog</span>
                </div>
                <img className="ravenimg" src={raven} alt="Raven" />
            </header>
            <body>
                <nav id="topNav">
                    <ul className="navLinks">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/teams">Teams</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </body>
            </>
        );
}