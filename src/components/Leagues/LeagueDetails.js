import React, { Fragment } from 'react';
import './../../assets/css/styles.css';


const LeagueDetails = ({ league }) => {
    const { league_id, name, country_code, logo, country, flag, season, season_start, season_end, founded } = league[0];
    
    return (
        <div class="title-league team-style">
            <div>
                <img src={ logo } alt="" class="league-logo"/>
            </div>
            <div>
                <p><strong>{ name }</strong></p>
                <p><strong>SEASON: { season }</strong></p>
            </div> 
        </div>  
    );
}

LeagueDetails.displayName = 'LeagueDetails';

export default LeagueDetails;
