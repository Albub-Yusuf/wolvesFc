import React from 'react';
import './Member.css';

import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faEuroSign } from '@fortawesome/free-solid-svg-icons';

const Member = (props) => {
    const {name,salary} = props.member;
    const removeTeamMember = props.removeTeamMember;
    return (
        <div className="block">
            <div>
                <h5>{name}  | {salary} <FontAwesomeIcon icon={faEuroSign}></FontAwesomeIcon> &nbsp;<FontAwesomeIcon className="delete-icon" onClick={()=>{ removeTeamMember(props.member); }} icon={faTimes}></FontAwesomeIcon></h5>
            </div>          
        </div>
    );
};

export default Member;