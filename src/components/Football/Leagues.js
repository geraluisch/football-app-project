import React from 'react';
import League from './League';
import { league_array } from '../../constants';
import logoLeague from './../../assets/img/football-logo.jpg';
import './../../assets/css/styles.css';

const Leagues = ({ currentLeagues }) => (
    <main>
       
        {            console.log("aaa"),
            currentLeagues.map((league, idx, arr) => {                        
                const {
                    league_id,
                    name,
                    type,
                    country,
                    country_code,
                    season,
                    season_start,
                    season_end,
                    logo,
                    flag
                } = league;               
                return ( 
                                                           
                    league_array.includes(league_id) ? (                                
                        <League
                            key={ league_id }
                            league_id={ league_id }
                            name={ name }
                            type={ type }
                            country={ country }
                            country_code={ country_code }
                            season={ season }  
                            season_start={ season_start }   
                            season_end={ season_end }   
                            logo={ logo }   
                            flag={ flag }                                                               
                        />) : null                   
                );

            }) 
        }      
    </main>
);

Leagues.displayName = 'Leagues';

export default Leagues;
