import React, { Fragment, useContext } from 'react';
import { FixturesContext } from './../../contexts/FixturesContext';
import Fixtures from './../Football/Fixtures';
import Skeleton from '@material-ui/lab/Skeleton';
import Message from './../Common/Message';
import './../../assets/css/styles.css';


const SearchBar = () => {
    const {  doneFetchFixtureLeague, fixturesLeague } = useContext(FixturesContext);
    const rows = [];       
    
    for (let i=0; i < 5; i++) 
        rows.push( <span><Skeleton variant="rect" width={ 200 } height={ 20 } /></span> )    
    
    return (
        <Fragment>
            {
                doneFetchFixtureLeague ?
                    (   fixturesLeague.results > 0 ? <Fixtures  fixturesLeague={ fixturesLeague } /> 
                        :                        
                        (<div class="main-buscador">   
                            <div class="form-grup-partidos">
                                <label>Next Matches:</label> 
                                <span> Not match found </span>                                        
                            </div> 
                        </div>)
                    )
                :
                    (   <div class="main-buscador">
                            <div class="form-grup-partidos">
                                <label>Next Matches:</label>
                                { rows } 
                            </div>                           
                        </div>     
                    )       
               
            }
        </Fragment>   
        
    );
}

SearchBar.displayName = 'SearchBar';

export default SearchBar;