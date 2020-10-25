import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({ });

const Statistics = ({ statistics }) => {
    const classes = useStyles();

    const { matchs, goals, goalsAvg } = statistics;
    const { matchsPlayed, wins, draws, loses } = matchs;   
        
    return (
        <div>
            <h4>STATISTICS</h4>                        
            <TableContainer component={ Paper } style={{ maxHeight: 230, overflow: 'auto' }}>
                <Table stickyHeader className={ classes.table } aria-label="simple table">
                    <TableHead>                       
                        <TableRow> 
                            <TableCell align="center">  -  </TableCell>                           
                            <TableCell align="center">Home</TableCell>
                            <TableCell align="center">Away</TableCell>
                            <TableCell align="center">Total</TableCell>                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row" align="left">Matchs Played</TableCell>
                            <TableCell align="center">{ matchsPlayed.home }</TableCell>
                            <TableCell align="center">{ matchsPlayed.away }</TableCell>
                            <TableCell align="center">{ matchsPlayed.total }</TableCell>
                        </TableRow>      
                        <TableRow>                          
                            <TableCell component="th" scope="row" align="left">Wins</TableCell>
                            <TableCell align="center">{ wins.home }</TableCell>
                            <TableCell align="center">{ wins.away }</TableCell>
                            <TableCell align="center">{ wins.total }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" align="left">Draws</TableCell>
                            <TableCell align="center">{ draws.home }</TableCell>
                            <TableCell align="center">{ draws.away }</TableCell>
                            <TableCell align="center">{ draws.total }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" align="left">Loses</TableCell>
                            <TableCell align="center">{ loses.home }</TableCell>
                            <TableCell align="center">{ loses.away }</TableCell>
                            <TableCell align="center">{ loses.total }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" align="left">Goals</TableCell>
                            <TableCell align="center">{ goals.goalsFor.home }</TableCell>
                            <TableCell align="center">{ goals.goalsFor.away }</TableCell>
                            <TableCell align="center">{ goals.goalsFor.total }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row" align="left">Goals Against</TableCell>
                            <TableCell align="center">{ goals.goalsAgainst.home }</TableCell>
                            <TableCell align="center">{ goals.goalsAgainst.away }</TableCell>
                            <TableCell align="center">{ goals.goalsAgainst.total }</TableCell>                        
                        </TableRow>                   
                    </TableBody>
                </Table>
            </TableContainer>
        </div>         
    );
}

Statistics.displayName = 'Statistics';

export default Statistics;
