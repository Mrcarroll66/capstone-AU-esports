import "./teams.css";
import Table from "react-bootstrap/Table";
import val from "../images/valorant.png";

const ValorantTeam: React.FC = () => {
    return (
        <div>
            <div>
                <img src={val} alt="valorant" />
                <h1>Valorant</h1>
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
                            <td>Brimstone</td>
                            <td>So.</td>
                            <td>Lexington, KY - University of Kentucky</td>
                        </tr>
                        <tr>
                            <td>Andrew Pape</td>
                            <td>watermelonStory</td>
                            <td>Skye</td>
                            <td>Jr.</td>
                            <td>Anderson, IN - Homeschool</td>
                        </tr>
                        <tr>
                            <td>Charles Koontz</td>
                            <td>koontzcb</td>
                            <td>Reyna</td>
                            <td>Sr.</td>
                            <td>New York, NY - Koontz school for the Gifted</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};
export default ValorantTeam;
