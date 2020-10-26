import React, { Fragment } from 'react';
import './../../assets/css/styles.css';

const League = ({ league_id, name, type, country, country_code, season, season_start, season_end, logo, flag}) => (
    <div class="main-card">
    <div class="box-league-logo">
        <img src={ logo } alt=""/>
    </div>    
    <div class="card-item">  
      <h3>{ name }</h3>
        <p><span>Type: </span>{ type }</p>
        <p><span>Country: </span>{ country }</p>
        <p><span>Season: </span>{ season }</p>
        <img src={ flag } alt=""/>
        <a href={`/leagues/league/${ league_id }`}><p>See more</p></a>  
    </div>            
  </div>   
);

League.displayName = 'League';

export default League;