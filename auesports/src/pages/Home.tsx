import react, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import ow from "../images/Overwatch_2.png";
import lol from "../images/LOL.png";
import rl from "../images/Rocket-League.png";
import val from "../images/valorant.png";
import ft from "../images/fortnite.png";
import cod from "../images/callofduty.png";
import ssmb from "../images/smash.png";
import apex from "../images/apex.png";
import coach from "../images/coach.png";
import valsc from "../images/valscore.png";
import rlsc from "../images/rlscore.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

function Home() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="homePage">
            <div className="newsContainer">
                <div className="newsHeadline">
                    <Carousel className="headlineImg" activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <Link to="/News">
                                <img className="newsimage" src={coach} alt="First slide" />
                            </Link>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/News">
                                <img className="newsimage" src={valsc} alt="Second slide" />
                            </Link>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Link to="/News">
                                <img className="newsimage" src={rlsc} alt="Third slide" />
                            </Link>
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="newsTitles">
                    {index === 0 ? (
                        <h1>
                            <Link className="bigTitle" to="/News">
                                Esports Spring 2022 GLEC Playoffs Preview
                            </Link>
                        </h1>
                    ) : (
                        <Link className="smallTitle" to="/News">
                            Esports Spring 2022 GLEC Playoffs Preview
                        </Link>
                    )}

                    {index === 1 ? (
                        <h1>
                            <Link className="bigTitle" to="/News">
                                Purple Raiders Sweep Valorant
                            </Link>
                        </h1>
                    ) : (
                        <Link className="smallTitle" to="/News">
                            Purple Raiders Sweep Valorant
                        </Link>
                    )}

                    {index === 2 ? (
                        <h1>
                            <Link className="bigTitle" to="/News">
                                Rocket League Pummels Manchester
                            </Link>
                        </h1>
                    ) : (
                        <Link className="smallTitle" to="/News">
                            Rocket League Pummels Manchester
                        </Link>
                    )}
                </div>
            </div>
            <div className="bottom-half">
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
            </div>
            <footer className="contact">
                <p>Email@email.com</p>
                <p>(123) 456-789</p>
                <p>1100 E 5th St. Anderson, IN 46012</p>
            </footer>
        </div>
    );
}

export default Home;
