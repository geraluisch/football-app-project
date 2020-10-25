import React, { createContext, useEffect, useState, Children } from 'react';
import { teamGet, teamSquad, teamStatistics, currentSeason, api_key, api_key_2 } from './../constants';

export const TeamContext = createContext();

const TeamContextProvider = ({ children }) => {
    const team_id = window.location.pathname.split('/')[4];  
    const league_id = window.location.pathname.split('/')[3];    
    const [doneFetchTeam, setDoneFetchTeam] = useState(false);   
    const [doneFetchTeamSquad, setDoneFetchTeamSquad] = useState(false);  
    const [doneFetchTeamStatistics, setDoneFetchTeamStatistics] = useState(false);
    const [team, setTeam] = useState([]);
    const [squad, setSquad] = useState([]);
    const [statistics, seStatistics] = useState([]);
    const myHeaders = new Headers();
    const myHeaders_2 = new Headers();   

    console.log(team_id+' '+league_id+' '+currentSeason);

    myHeaders.append("X-RapidAPI-Key", api_key);
    myHeaders_2.append("X-RapidAPI-Key", api_key_2());
    
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const requestOptions_2 = {
        method: 'GET',
        headers: myHeaders_2,
        redirect: 'follow'
    };

    useEffect(() => getTeam(team_id), [team_id]);
    useEffect(() => getSquad(team_id,currentSeason), [team_id,currentSeason]);
    useEffect(() => getStatistics(league_id,team_id), [league_id,team_id]);

    const getTeam = teamId => {
        console.log('team id: '+teamId);
        fetch(teamGet(teamId), requestOptions_2)
            .then(res => res.json())
            .then(data => {
                const { api } = data;                
                setDoneFetchTeam(true);
                setTeam(api);     
            })
            .catch(err => console.log(err));
            
    };

    const getSquad = (teamId, season) => {        
        fetch(teamSquad(teamId, season), requestOptions_2)
            .then(res => res.json())
            .then(data => {
                const { api } = data;                                
                setDoneFetchTeamSquad(true);            
                setSquad(api);
                console.log(api);               
            })
            .catch(err => console.log(err));
    };

    const getStatistics = (leagueId, teamId)  => {
        fetch(teamStatistics(leagueId, teamId), requestOptions)
            .then(res => res.json())
            .then(data => {           
                const { api } = data;                                
                setDoneFetchTeamStatistics(true);                
                seStatistics(api);               
            })
            .catch(err => console.log(err));
    }

    return (
        <TeamContext.Provider value={{ team, squad, statistics, doneFetchTeam, doneFetchTeamSquad, doneFetchTeamStatistics }} >
            { children }
        </TeamContext.Provider>

    );


}

export default TeamContextProvider;

