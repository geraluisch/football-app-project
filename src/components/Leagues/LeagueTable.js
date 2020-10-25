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

const LeagueTable = ({ leagueTable }) => {
    const classes = useStyles();

    const { standings } = leagueTable;
        
    return (
        <div class="main-card-league team-style">
            <h4>TABLE POSITION</h4>                        
            <TableContainer component={ Paper } style={{ maxHeight: 370, overflow: 'auto' }}>
                <Table stickyHeader className={ classes.table } aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Position</TableCell>
                            <TableCell align="center">Club</TableCell>
                            <TableCell align="center">Played</TableCell>
                            <TableCell align="center">Won</TableCell>
                            <TableCell align="center">Drawn</TableCell>
                            <TableCell align="center">Lost</TableCell>
                            <TableCell align="center">GF</TableCell>
                            <TableCell align="center">GA</TableCell>
                            <TableCell align="center">GD</TableCell>
                            <TableCell align="center">Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {standings[0].map((row) => (
                        <TableRow key={ row.team_id }>
                            <TableCell component="th" scope="row" align="center">{ row.rank }</TableCell>
                            <TableCell align="left">{ row.teamName }</TableCell>
                            <TableCell align="center">{ row.all.matchsPlayed }</TableCell>
                            <TableCell align="center">{ row.all.win }</TableCell>
                            <TableCell align="center">{ row.all.draw }</TableCell>
                            <TableCell align="center">{ row.all.lose }</TableCell>
                            <TableCell align="center">{ row.all.goalsFor }</TableCell>
                            <TableCell align="center">{ row.all.goalsAgainst }</TableCell>
                            <TableCell align="center">{ row.goalsDiff }</TableCell>
                            <TableCell align="center">{ row.points }</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>         
    );
}

LeagueTable.displayName = 'LeagueTable';

export default LeagueTable;
