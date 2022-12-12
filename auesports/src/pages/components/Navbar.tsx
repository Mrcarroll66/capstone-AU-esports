import react from "react";
import { Link } from "react-router-dom";
import raven from "../../images/raven.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navbar.css";

const Topnav: React.FC = () => {
    return (
        <Navbar className="navTop" expand="lg">
            <Container>
                <Navbar.Brand>
                    {" "}
                    <Link className="link" to="/home">
                        <img src={raven} alt="AURaven"></img>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavDropdown title="Roster" id="basic-nav-dropdown" className="dropDown">
                        <NavDropdown.Item className="item">
                            <Link className="link" to="/leagueteam">
                                League of Legends
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="item">
                            <Link className="link" to="/Overwatchteam">
                                Overwatch
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="item">
                            <Link className="link" to="/ValorantTeam">
                                Valorant
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="item">
                            <Link className="link" to="/Teams">
                                Rocket League
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="item">
                            <Link className="link" to="/Teams">
                                Apex Legends
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="item">
                            <Link className="link" to="/Teams">
                                Super Smash Bros
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Link className="link" to="/News">
                        News
                    </Link>
                    <Link className="link" to="/News">
                        Highlights
                    </Link>
                    <Link className="link" to="/About">
                        About
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Topnav;
