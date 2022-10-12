import react from "react";
import "./home.css";
import "./news.css";
import ow from "../images/Overwatch_2.png";
import lol from "../images/LOL.png";
import rl from "../images/Rocket-League.png";
import val from "../images/valorant.png";
import ft from "../images/fortnite.png";
import cod from "../images/callofduty.png";
import ssmb from "../images/smash.png";
import apex from "../images/apex.png";

function Home() {
    return (
        <>
            <div>
            <div className="newscontainer">
                <a className="headline">News that's big</a>
                <a className="newsbody">
                    Filler text that is also the news body, a really long description to show how the text is going to
                    react to going over
                </a>
                <a className="headline">apex news</a>
                <a className="newsbody">Here is some more filler text</a>
                <a className="headline">More news</a>
                <a className="newsbody">Here is some more filler text</a>
                <a className="headline">More news</a>
                <a className="newsbody">Here is some more filler text</a>
            </div>
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
           
            <footer className="contact">
                <p>Email@email.com</p>
                <p>(123) 456-789</p>
                <p>1100 E 5th St. Anderson, IN 46012</p>
            </footer>
        </>
    );
}

export default Home;
