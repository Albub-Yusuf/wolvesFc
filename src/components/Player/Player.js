import React from 'react';
import './Player.css';

import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEuroSign } from '@fortawesome/free-solid-svg-icons';



const Player = (props) => {
    const {name,club,salary,image} = props.player;
    const addTeamMembers = props.addTeamMembers;
    return (
        <div className="card-wrapper">
        <div className="player-card">
        <div className="background">
        <div className="player-image">
        <img src={image} alt="having problem loading the image from server. Please refresh again..."/>
        </div>
        </div>
        <div className="details">
        <h5>{name}</h5>
        <p>{club}</p>
        <p>Annual Salary : {salary}  <FontAwesomeIcon icon={faEuroSign}></FontAwesomeIcon></p>
        <Button onClick={()=>{
            addTeamMembers(props.player);
        }}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>  &nbsp;Add to Team</Button>
        </div>
    </div>
    </div>
    );
};


export default Player;