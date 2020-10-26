import React, { createContext, useEffect, useState, Children } from 'react';
import { leagueGet, teamLeagueGet, leagueTableGet, api_key, api_key_2 } from './../constants';

export const LeagueContext = createContext();

const LeagueContextProvider = ({ children }) => {
    const league_id = window.location.pathname.split('/')[3];
    const [doneFetchLeague, setDoneFetchLeague] = useState(false);
    const [doneFetchTeams, setDoneFetchTeams] = useState(false);
    const [doneFetchLeagueTable, setDoneFetchLeagueTable] = useState(false);
    const [league, setLeague] = useState([]);
    const [teamsLeague, setTeamsLeague] = useState([]);
    const [leagueTable, setLeagueTable] = useState([]);
    const myHeaders = new Headers();
    const myHeaders_2 = new Headers();    

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

    useEffect(() => getLeague(league_id), [league_id]);
    useEffect(() => getTeams(league_id), [league_id]);
    useEffect(() => getLeagueTable(league_id), [league_id]);

    const getLeague = league_id => {
        fetch(leagueGet(league_id), requestOptions)
            .then(res => res.json())
            .then(data => {
                const { api } = data;                
                setDoneFetchLeague(true);
                setLeague(api.leagues);               
            })
            .catch(err => console.log(err));
    };

    const getTeams = league_id => {
        fetch(teamLeagueGet(league_id), requestOptions)
            .then(res => res.json())
            .then(data => {
                const { api } = data;                                
                setDoneFetchTeams(true);                
                setTeamsLeague(api);                               
            })
            .catch(err => console.log(err));
    };

    const getLeagueTable = league_id => {
        fetch(leagueTableGet(league_id), requestOptions_2)
            .then(res => res.json())
            .then(data => {           
                const { api } = data;                                
                setDoneFetchLeagueTable(true);                
                setLeagueTable(api);               
            })
            .catch(err => console.log(err));
    }

    return (
        <LeagueContext.Provider value={{ league, teamsLeague, leagueTable, doneFetchLeague, doneFetchTeams, doneFetchLeagueTable }} >
            { children }
        </LeagueContext.Provider>

    );


}

export default LeagueContextProvider;

