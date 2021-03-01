import { useEffect, useState } from 'react';

// import fakeData 
import PlayersData from './fakeData/playerInfo.json';

//import fontAwesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faHandHoldingUsd, faUsers, faEuroSign } from '@fortawesome/free-solid-svg-icons';

// import BootStrap
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Components
import Navbar from './components/Navbar/Navbar';
import Player from './components/Player/Player';
import Member from './components/Member/Member';
import Footer from './components/Footer/Footer';

function App() {


// set players from fake data
 const [players, setPlayers] = useState([]);

  useEffect(() => {

    setPlayers(PlayersData);
    console.log(players);

  }, []);


  // set team members from players
  const [teamMembers, setTeamMembers] = useState([]);
  
  const addTeamMembers = (member) => {

    //check if player previously added
    const found = teamMembers.find(element => element.id == member.id);
    if (typeof found !== 'undefined') {
      alert("player already added!");
    }
    else {
      // Add player to team
      const newMember = [...teamMembers, member];
      setTeamMembers(newMember);
    }

  }

  // Remove player from team
  const removeTeamMember = (data) => {

    const playerId = teamMembers.indexOf(data);
    const removePlayer = teamMembers.filter((member, index) => index !== playerId);
    setTeamMembers(removePlayer);

  }

  // Total Salary Count
  const totalSalary = teamMembers.reduce((sum, salary) => sum + salary.salary, 0);


  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* use bootstrap container */}
      <Container>
        <header>
          {/* showing total number of players, salray and budget */}
          <Row style={{ padding: '20px', marginTop: '20px' }}>
            <Col><h5><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>  Total Team Members : {teamMembers.length}</h5></Col>
            <Col><h5><FontAwesomeIcon icon={faHandHoldingUsd}></FontAwesomeIcon> Total Salary : {totalSalary}  <FontAwesomeIcon icon={faEuroSign}></FontAwesomeIcon></h5></Col>
            <Col><h5><FontAwesomeIcon icon={faCoins}></FontAwesomeIcon> Total Budget: {totalSalary} <FontAwesomeIcon icon={faEuroSign}></FontAwesomeIcon></h5></Col>
          </Row>
        </header>

        <main>
          {/* showing added team members name */}
          <section id="my-team">
            <br /> <hr></hr>
            <h5>My Team Members</h5>
            <hr></hr>
            <Row style={{ padding: '20px', marginTop: '10px' }}>
              {
                teamMembers.map(member => <Member removeTeamMember={removeTeamMember} key={member.id} member={member}></Member>)
              }
            </Row>
          </section>

          {/*Showing All players info  */}
          <section id="players">
            <br /> <hr></hr>
            <h5>All Players</h5>
            <hr></hr>

            <Row style={{ padding: '20px', marginTop: '10px' }}>
              {

                players.map(player => <Player addTeamMembers={addTeamMembers} key={player.id} player={player}></Player>)
              }
            </Row>
          </section>

        </main>
      </Container>

      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
}

export default App;
