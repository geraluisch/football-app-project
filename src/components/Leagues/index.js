import React, { Fragment, useContext } from 'react';
import { LeagueContext } from '../../contexts/LeagueContext';
import Skeleton from '@material-ui/lab/Skeleton';
import Message from './../Common/Message';
import LeagueDetails from './LeagueDetails';
import LeagueTable from './LeagueTable';
import Teams from './Teams';
import './../../assets/css/styles.css';

const LeaguesInfo = () => {
    const { league, teamsLeague, leagueTable, doneFetchLeague, doneFetchTeams, doneFetchLeagueTable } = useContext(LeagueContext);
    let rows = [];
    let teamRows = [];

    for (let i=0; i < 9; i++)
        rows.push( <Skeleton width="100%" height={ 40 }/>  )

    for (let i=0; i < 6; i++)
        teamRows.push( <Skeleton width="100%" height={ 180 }/>  )       

    return (
        <Fragment> 
            <main class="body-league" >
            {
                doneFetchLeague ?
                    ( league.length ? <LeagueDetails  league={ league } /> : <Message text='Error' /> )
                :
                    ( <div class="title-league team-style"> <Skeleton width="100%" height="95%" /> </div> )
            } 
                
                <div class="main-league">
                {   
                    (doneFetchTeams) ?  
                        (teamsLeague.results > 0 ? <Teams  teamsLeague={ teamsLeague } /> : <Message text='Error' /> )
                    :
                        ( 
                            <div class="main-card-league team-style">
                                <h4>TEAMS</h4>
                                <div class="main-card-team">                           
                                    { teamRows }
                                </div>     
                            </div> 
                        )                   
                }
                {
                    doneFetchLeagueTable ?
                        ( leagueTable.results > 0 ? <LeagueTable  leagueTable={ leagueTable } /> : <Message text='Error' /> )
                    :
                        ( 
                            <div class="main-card-league team-style">
                                <h4>TABLE POSITION</h4>
                                { rows }                       
                            </div> 
                        ) 
                }
                </div>     
            
            </main>
        </Fragment>
    );
};

LeaguesInfo.displayName = 'LeaguesInfo';

export default LeaguesInfo;