import react, { useState } from "react";
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
                            <img className="newsimage" src={coach} alt="First slide" />
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="newsimage" src={valsc} alt="Second slide" />
                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="newsimage" src={rlsc} alt="Third slide" />

                            <Carousel.Caption></Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="newsTitles">
                    <ul>
                        <li>
                            {index === 0 ? (
                                <h1>Esports Spring 2022 GLEC Playoffs Preview</h1>
                            ) : (
                                <h4>Esports Spring 200 GLEC Playoffs Preview</h4>
                            )}
                        </li>
                        <li>
                            {index === 1 ? (
                                <h1>Purple Raiders Sweep Valorant</h1>
                            ) : (
                                <h4>Purple Raiders Sweep Valorant</h4>
                            )}
                        </li>
                        <li>
                            {index === 2 ? (
                                <h1>Rocket League Pummels Manchester</h1>
                            ) : (
                                <h4>Rocket League Pummels Manchester</h4>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
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
        </div>
    );
}

export default Home;
