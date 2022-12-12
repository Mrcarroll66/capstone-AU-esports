import "./teams.css";
import Table from "react-bootstrap/Table";
import lol from "../images/lol.png";

const LeagueTeam: React.FC = () => {
    return (
        <div>
            <div>
                <img src={lol} alt="League of Legends" />
                <h1>League of Legends</h1>
            </div>
            <div>
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
                            <td>Top Lane</td>
                            <td>So.</td>
                            <td>Lexington, KY - University of Kentucky</td>
                        </tr>
                        <tr>
                            <td>Andrew Pape</td>
                            <td>watermelonStory</td>
                            <td>Mid Lane</td>
                            <td>Jr.</td>
                            <td>Anderson, IN - Homeschool</td>
                        </tr>
                        <tr>
                            <td>Charles Koontz</td>
                            <td>koontzcb</td>
                            <td>Support</td>
                            <td>Sr.</td>
                            <td>New York, NY - Koontz school for the Gifted</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};
export default LeagueTeam;
