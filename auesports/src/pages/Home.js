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

function Home() {
    return (
        <>
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

export default Home;
