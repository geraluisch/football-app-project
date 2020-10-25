import React, { Fragment, useContext, useState } from 'react';
import { SearchLeagueContext } from '../../contexts/SearchLeagueContext';
import SearchTableLeague from './SearchTableLeague';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import SearchMessage from '../Common/SearchMessage';
import Message from '../Common/Message';
import './../../assets/css/styles.css';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const SearchLeague = () => {
    const {  doneFetchSearchLeague, doneFetchSearchCountries, searchLeague, searchCountries, validateSearchLeague, searchIni } = useContext(SearchLeagueContext);
    
    const [leagueSearch, setLeagueSearch] = useState([]);
      
    const classes = useStyles();   

    const handleChange = (event) => {
        setLeagueSearch(event.target.value);
    };

    const rows = [];
   
    for (let i=0; i < 8; i++)
        rows.push( <Skeleton width="100%" height="100%" />  )  

    return (
        <Fragment> 
            <main class="body-fixtures" >
                <div class="title-fixtures team-style">   
                        {   doneFetchSearchCountries ?
                            (
                                searchCountries.results > 0 ?
                                (
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">Select a league</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="combo-league"
                                            value={ leagueSearch }
                                            onChange={ handleChange }
                                        >
                                            { searchCountries.countries.map((row,idx) => (                                
                                                <MenuItem key={ idx } value={ row.country }>{ row.country }</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )
                                :
                                ( <Message text='Coutries not found'/> )
                            )
                            :
                            ( <Skeleton width="20%" height={ 40 } style={{ marginRight: 10 }}/> )                       
                        }
                        <Button variant="contained" onClick={ e => validateSearchLeague(e,leagueSearch) }>Search</Button>                     
                </div>  
                
                <div class="main-league team-style">
                {   
                    searchIni ?
                    (    doneFetchSearchLeague ?  
                        ( searchLeague.results > 0 ? <SearchTableLeague  countryLeagues={ searchLeague } /> : <SearchMessage text=' Leagues by country not found'/> )
                        :
                        ( <div class="main-card-league-skeleton"> { rows } </div> ) 
                    )
                    :
                    ( <div class="main-card-search"> Search Leagues by Country </div>  )
                   
                                      
                }                     
                </div>  
            </main>
        </Fragment>
    );
};

SearchLeague.displayName = 'SearchLeague';

export default SearchLeague;