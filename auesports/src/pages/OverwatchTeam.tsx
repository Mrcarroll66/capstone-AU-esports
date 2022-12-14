import "./teams.css";
import Table from "react-bootstrap/Table";
import ow from "../images/Overwatch_2.png";

const OverwatchTeam: React.FC = () => {
    return (
        <div>
            <div>
                <img src={ow} alt="Overwatch" />
                <h1>Overwatch</h1>
                <div>
                    Scedule/Score
                    <p>Upcoming Games</p>
                    <hr></hr>
                    <p>Recent Games</p>
                </div>
                <div>
                    Highlights
                    <p>Most recent highlight goes here</p>
                    <a href="https://www.twitch.tv/andersonuesports">Twitch</a>
                </div>
            </div>
            <div>
                <h3>Roster</h3>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gamertag</th>
                            <th>Role</th>
                            <th>Year</th>
                            <th>Hometown/High School</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Matthew Preston</td>
                            <td>drpreston123</td>
                            <td>Tank</td>
                            <td>So.</td>
                            <td>Lexington, KY - University of Kentucky</td>
                        </tr>
                        <tr>
                            <td>Andrew Pape</td>
                            <td>watermelonStory</td>
                            <td>Support</td>
                            <td>Jr.</td>
                            <td>Anderson, IN - Homeschool</td>
                        </tr>
                        <tr>
                            <td>Charles Koontz</td>
                            <td>koontzcb</td>
                            <td>DPS</td>
                            <td>Sr.</td>
                            <td>New York, NY - Koontz school for the Gifted</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};
export default OverwatchTeam;
