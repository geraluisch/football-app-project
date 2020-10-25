import React, { Fragment } from 'react';
import './../../assets/css/styles.css';

const TeamInfo = ({ team }) => {
    const { team_id, name, logo, country, founded, venue_name, venue_address, venue_city, venue_capacity } = team[0];
   
    return (
        <div class="main-team-info team-style"> 
            <div class="box-title-info">
                <img src={ logo } alt=""/>
                <p>{ name }</p>
            </div>
            <div class="box-info">
                <p><strong>Country: </strong>{country}</p>
                <p><strong>City: </strong>{ venue_city }</p>
                <p><strong>Founded: </strong>{ founded }</p>
                <p><strong>Address: </strong>{ venue_address }</p>
                <p><strong>Stadium: </strong>{ venue_name }</p>
                <p><strong>Capacity: </strong>{ venue_capacity }</p>               
            </div>           
        </div>       
    );
}

TeamInfo.displayName = 'TeamInfo';

export default TeamInfo;
