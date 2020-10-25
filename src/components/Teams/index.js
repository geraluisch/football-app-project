import React, { Fragment, useContext } from 'react';
import { TeamContext } from '../../contexts/TeamContext';
import Skeleton from '@material-ui/lab/Skeleton';
import Message from './../Common/Message';
import TeamInfo from './TeamInfo';
import Squad from './Squad';
import Statistics from './Statistics';
import './../../assets/css/styles.css';

const LeagueTeam = () => {
    const { team, squad, statistics, doneFetchTeam, doneFetchTeamSquad, doneFetchTeamStatistics } = useContext(TeamContext);
    let rows = [];
    let infoRows = [];
    
    for (let i=0; i < 5; i++)
        infoRows.push( <Skeleton width="100%" height={ 40 }/>  )


    for (let i=0; i < 7; i++)
        rows.push( <Skeleton width="100%" height={ 32 }/>  )      

    return (
        <Fragment> 
            <main class="body-team" >
            {
                doneFetchTeam ?
                    ( team.results > 0 ?  <TeamInfo  team={ team.teams } /> : <Message text='Error' /> )
                :
                    (
                        <div class="main-team-info team-style"> 
                            <div class="box-title-info">
                                <Skeleton width="40%" height={ 80 }/>
                                <Skeleton width="40%" height={ 80 }/>
                            </div>
                            <div class="box-info">
                                { infoRows }        
                            </div>           
                        </div>       
                    )

            }
                <div class="main-team-info team-style"> 
            {   
                doneFetchTeamStatistics ?
                    ( statistics.results > 0 ? <Statistics  statistics={ statistics.statistics } /> : <Message text='Error' /> )
                :
                    ( <div> <h4>STATISTICS</h4> { rows } </div> )
            }
            {   
                doneFetchTeamSquad ?
                    ( squad.results > 0 ? <Squad  squad={ squad } /> : <Message text='Error' /> )
                :
                    ( <div > <h4>SQUAD</h4> { rows } </div> )              
            }
                </div>
            </main>           
        </Fragment>
    );
};

LeagueTeam.displayName = 'LeagueTeam';

export default LeagueTeam;