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
                    // : 
                    //     (arr.length === idx + 1) ? (
                    //         <League
                    //             key={ -1 }
                    //             league_id={ -1 } 
                    //             logo={ logoLeague }                                                                                      
                    //         />
                    //     )                        
                    //     : null 
                );

            }) 
        }      
    </main>


    // <Fragment>
    //      <div className="root">
    //         <Grid container spacing={ 1 } justify="center">
    //             {
    //                 currentLeagues.map(league => {                        
    //                     const {
    //                         league_id,
    //                         name,
    //                         type,
    //                         country,
    //                         country_code,
    //                         season,
    //                         season_start,
    //                         season_end,
    //                         logo,
    //                         flag
    //                     } = league; 
    //                     console.log({league_id})                                           
    //                     return (                             
    //                         league_array.includes(league_id) ? (                                
    //                         <League
    //                             key={ league_id }
    //                             league_id={ league_id }
    //                             name={ name }
    //                             type={ type }
    //                             country={ country }
    //                             country_code={ country_code }
    //                             season={ season }  
    //                             season_start={ season_start }   
    //                             season_end={ season_end }   
    //                             logo={ logo }   
    //                             flag={ flag }                                                               
    //                         />) : null 
    //                     ); 

    //                 })
    //             }    
    //         </Grid>
    //      </div>
    // </Fragment>
);

Leagues.displayName = 'Leagues';

export default Leagues;
