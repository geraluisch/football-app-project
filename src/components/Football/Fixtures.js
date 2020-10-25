import React from 'react';
import { league_array } from '../../constants';
import './../../assets/css/styles.css';

const SearchBar = ({ fixturesLeague }) => { 
    
    const {  fixtures } = fixturesLeague;
    const rows = [];
    
    fixtures.map((league, idx, arr) => {   
        const { league_id, homeTeam, awayTeam } = league;        
        
        rows.push( 
            <span>
                <img src={ homeTeam.logo } alt=""/> { homeTeam.team_name } vs { awayTeam.team_name } <img src={ awayTeam.logo } alt=""/>
            </span> 
        )
    }) 
    
    return (
        <div class="main-buscador">   
            <div class="form-grup-partidos">
                <label>Next Matches:</label>
                { rows }               
            </div>            
            {/* <div class="form-group-down">
                <div class="grup-input-positon box-buscador">   
                    <input id="txtBuscar" placeholder="Search" class="form-control input-margin-izquierdo" type="text"/>
                    <div id="spanBuscar" class="icon-position-btn-buscar">
                        <span class="fas fa-search " title="Buscar"></span>
                    </div>
                </div>
            </div> */}
        </div>
    )
};

SearchBar.displayName = "SearchBar";

export default SearchBar;