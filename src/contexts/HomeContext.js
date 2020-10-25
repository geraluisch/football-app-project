import React, { createContext, useState, useEffect, Children } from 'react';
import { currentLeaguesGet, api_key } from '../constants';

export const HomeContext = createContext();

const HomeContextProvider = ({ children }) => {    
    const [doneFetch, setDoneFetch] = useState(false); 
    const [currentLeagues, setCurrentLeagues] = useState([]);  
    const myHeaders = new Headers();     

     myHeaders.append("X-RapidAPI-Key", api_key);
    
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    
    
    useEffect(() =>{ 
        console.log('entrando');
        getCurrentLeagues()}, []);   

    const getCurrentLeagues = () => {         
        fetch(currentLeaguesGet(), requestOptions)
            .then(res => res.json())
            .then(data => {
                const { api } = data;                
                setDoneFetch(true);
                setCurrentLeagues(api);               
            })
            .catch(err => console.log(err));
    };      
    
    return (

        <HomeContext.Provider value={{ doneFetch, currentLeagues }}>
            { children }
        </HomeContext.Provider>

    );

}  

export default HomeContextProvider;

