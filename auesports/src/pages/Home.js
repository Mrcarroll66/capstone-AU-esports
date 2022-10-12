import react from "react";
import "./home.css";
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
import raven from '../images/raven.png'

function Home () {
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
					<ul className="navLinks" >
						<li><a href="/">Home</a></li>
						<li><a href="/teams">Teams</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</nav>
				<div>
					<div className="team-container">
						<a href="https://playoverwatch.com/en-us/">
							<img src={ow} alt="Overwatch" className="owimg" />
						</a>
						<a href="https://www.leagueoflegends.com/en-us/">
							<img src={lol} alt="League of Legends" className="sqimg" />
						</a>
						<a href="https://www.rocketleague.com/">
							<img src={rl} alt="Rocket League" className="rlimg" />
						</a>
						<a href="https://playvalorant.com/en-us/">
							<img src={val} alt="Valorant" className="sqimg" />
						</a>
						<a href="https://www.epicgames.com/fortnite/en-US/home">
							<img src={ft} alt="Fortnite" className="sqimg" />
						</a>
					</div>
					<div className="team-container">
						<a href="https://www.callofduty.com/">
							<img src={cod} alt="Call of Duty" className="codimg" />
						</a>
						<a href="https://www.smashbros.com/en_US/">
							<img src={ssmb} alt="Super Smash Bros" className="sqimg" />
						</a>
						<a href="https://www.ea.com/games/apex-legends">
							<img src={apex} alt="Apex Legends" className="sqimg" />
						</a>
					</div>
				</div>
			</body>
            <Container fluid>
                <Row className="team-container">
                    <Col>
                        <img src={ow} alt="Overwatch" />
                    </Col>
                    <Col>
                        <img src={lol} alt="League of Legends" />
                    </Col>
                    <Col>
                        <img src={rl} alt="Rocket League" />
                    </Col>
                    <Col>
                        <img src={val} alt="Valorant" />
                    </Col>
                    <Col>
                        <img src={ft} alt="Fortnite" />
                    </Col>
                </Row>
                <Row className="team-container">
                    <Col>
                        <img src={apex} alt="Apex Legends" />
                    </Col>
                    <Col>
                        <img src={cod} alt="Call of Duty" />
                    </Col>
                    <Col>
                        <img src={ssmb} alt="Super Smash Bros" />
                    </Col>
                </Row>
            </Container>
            <footer className="contact">
                <p>Email@email.com</p>
                <p>(123) 456-789</p>
                <p>1100 E 5th St. Anderson, IN 46012</p>
            </footer>
        </>
    );
}

export default Home
