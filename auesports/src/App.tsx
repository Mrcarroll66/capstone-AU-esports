import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LeagueTeam from "./pages/LeagueTeam";
import OverwatchTeam from "./pages/OverwatchTeam";
import Topnav from "./pages/components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Topnav></Topnav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/leagueteam" element={<LeagueTeam />} />
                    <Route path="/overwatchteam" element={<OverwatchTeam />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
