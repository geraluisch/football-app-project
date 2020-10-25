import React, { Fragment, useContext, useState } from 'react';
import { FixturesContext } from '../../contexts/FixturesContext';
import FixturesTable from './FixturesTable';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import SearchMessage from '../Common/SearchMessage';
import { league_array_info } from '../../constants';
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

const LeaguesInfo = () => {
    const {  doneFetchSearchFixtureLeague, searchFixturesLeague, validateSearch, searchIni } = useContext(FixturesContext);
    
    const [leagueFixt, setLeagueFixt] = useState('');

    const [selectedDate, setSelectedDate] = useState(new Date());
      
    const classes = useStyles();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
   

    const handleChange = (event) => {
        setLeagueFixt(event.target.value);
    };

    const rows = [];
   
    for (let i=0; i < 9; i++)
        rows.push( <Skeleton width="100%" height={ 40 }/>  )  

    return (
        <Fragment> 
            <main class="body-fixtures" >
                <div class="title-fixtures team-style">                       
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Select a league</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="combo-league"
                                value={ leagueFixt }
                                onChange={handleChange}
                            >
                                { league_array_info.map((row) => (                                
                                    <MenuItem value={ row.id }>{ row.name }</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <MuiPickersUtilsProvider utils={ DateFnsUtils }>
                            <Grid container justify="space-around">                               
                                <KeyboardDatePicker
                                disableToolbar
                                variant='inline'
                                format='yyyy-MM-dd'
                                margin="normal"
                                id="date-picker"
                                label="Date Picker"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                    
                        <Button variant="contained" onClick={ e => validateSearch(e,leagueFixt) }>Search</Button>
                     
                </div>  
                
                <div class="main-league team-style">
                {   
                    searchIni ?
                    (
                        doneFetchSearchFixtureLeague ?  
                            ( searchFixturesLeague.results > 0 ? <FixturesTable  fixture={ searchFixturesLeague } /> : <SearchMessage text='Not found' type="-"/> )
                        :
                            ( <div class="main-card-fixtures"> { rows } </div> )
                    )
                    :
                    ( <div class="main-card-search"> Search Fixtures by League and Date </div> )                   
                }                     
                </div>  
            </main>
        </Fragment>
    );
};

LeaguesInfo.displayName = 'LeaguesInfo';

export default LeaguesInfo;