import React, { createContext, useState, useEffect, Children } from 'react';
import { fixturesGet, cl_league_id, sp_league_id, api_key, api_key_2 } from '../constants';

export const FixturesContext = createContext();

const FixturesProvider = ({ children }) => {    
    const [doneFetchFixtureLeague, setDoneFetchFixtureLeague] = useState(false);
    const [fixturesLeague, setFixturesLeague] = useState([]);  
    const [doneFetchSearchFixtureLeague, setDoneFetchSearchFixtureLeague] = useState(false);
    const [searchFixturesLeague, setSearchFixturesLeague] = useState([]); 
    const [currentDate, setCurrentDate] = useState([]);  
    const [searchIni, setSearchIni] = useState(false); 
    const [searchDate, setSearchDate] = useState([]);  
    const [searchLeague, setSearchLeague] = useState([]);     
    const myHeaders = new Headers();   
    const myHeaders_2 = new Headers(); 
        
    const endOfWeek = date => {       
      const lastday = date.getDate() - (date.getDay() - 1) + 6;
      return new Date(date.setDate(lastday));   
    }
    
    const formatDate = date => [
        date.getFullYear(),
        (date.getMonth() + 1).toString().padStart(2, '0'),
        date.getDate().toString().padStart(2, '0')
    ].join('-');

    const dateNextWeekend = formatDate(endOfWeek(new Date()));

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
  
    useEffect(() => getFixtures(sp_league_id, dateNextWeekend), []);    

    const getFixtures = (league_id, nextMatchDate) => {         
        fetch(fixturesGet(league_id,nextMatchDate), requestOptions)
            .then(res => res.json())
            .then(data => {
                const { api } = data;      
                setDoneFetchFixtureLeague(true);
                setFixturesLeague(api);
                setCurrentDate(nextMatchDate);                 
            })
            .catch(err => console.log(err));       
    };  

    const getSearchFixtures = (league_id, nextMatchDate) => {   
        
        fetch(fixturesGet(league_id,nextMatchDate), requestOptions)
            .then(res => res.json())
            .then(data => {
                const { api } = data;      
                setDoneFetchSearchFixtureLeague(true);
                setSearchFixturesLeague(api);   
                setSearchLeague(league_id);   
                setSearchDate(nextMatchDate);   
                console.log(api);                     
            })
            .catch(err => console.log(err));       
    };

    const validateSearch = (e, league_id, date = document.querySelector('#date-picker').value ) => { 
        if (league_id && date && (league_id !== searchLeague || date !== searchDate)) {
            setSearchLeague(league_id);
            setSearchDate(date);
            setSearchIni(true);
            setDoneFetchSearchFixtureLeague(false);
            getSearchFixtures(league_id, date);
        }
    }
    
    return (

        <FixturesContext.Provider value={{ doneFetchFixtureLeague, doneFetchSearchFixtureLeague, fixturesLeague, searchFixturesLeague, currentDate, searchIni, validateSearch }}>
            { children }
        </FixturesContext.Provider>

    );


}  

export default FixturesProvider;

