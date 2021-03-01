import React from 'react';
import './Member.css';

import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Member = (props) => {
    const {name} = props.member;
    const removeTeamMember = props.removeTeamMember;
    return (
        <div className="block">
            
            <Button  
            
            onClick={()=>{
                removeTeamMember(props.member);
            }}>
            
            {name} &nbsp;<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></Button>
        </div>
    );
};

export default Member;