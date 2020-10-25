import React, { createContext, useState, useEffect, Children } from 'react';
import { countriesGet, leagueCountry, api_key, api_key_2 } from '../constants';

export const SearchLeagueContext = createContext();

const SearchLeagueContextProvider = ({ children }) => {    
    const [doneFetchSearchLeague, setDoneFetchSearchLeague] = useState(false); 
    const [doneFetchSearchCountries, setDoneFetcSearchCountries] = useState(false);  
    const [searchLeague, setSearchLeague] = useState([]);  
    const [searchIni, setSearchIni] = useState(false); 
    const [searchCountry, setSearchCountry] = useState([]); 
    const [searchCountries, setSearchCountries] = useState([]);     
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
    
    useEffect(() => getCountries(), [searchCountries]);    

    const getCountries = () => {        
        fetch(countriesGet(), requestOptions)
            .then(res => res.json())
            .then(data => {
                const { api } = data;                
                setDoneFetcSearchCountries(true);                
                setSearchCountries(api); 
            })
            .catch(err => console.log(err));
    };   
    
    const getLeagues = country => { 
        fetch(leagueCountry(country), requestOptions_2)
            .then(res => res.json())
            .then(data => {
                const { api } = data;                
                setDoneFetchSearchLeague(true);
                setSearchLeague(api);
            })
            .catch(err => console.log(err));
    }; 
    
    const validateSearchLeague = (e, country ) => { 
       
        if (searchCountry && country !== searchCountry) {
            setSearchCountry(country);       
            setSearchIni(true);   
            setDoneFetchSearchLeague(false);
            getLeagues(country);
        }
    }
    
    return (

        <SearchLeagueContext.Provider value={{ doneFetchSearchLeague, doneFetchSearchCountries, searchLeague, searchCountries, searchIni, validateSearchLeague }}>
            { children }
        </SearchLeagueContext.Provider>

    );

}  

export default SearchLeagueContextProvider;

