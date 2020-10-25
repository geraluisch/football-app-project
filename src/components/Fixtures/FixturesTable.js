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

const getTime = timeStamp => {
    
    const date = new Date(timeStamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();    
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
}

const formatDate = date => {
    const d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const FixturesTable = ({ fixture }) => {
    const classes = useStyles();    
    const { fixtures } = fixture;
        
    return (
        <div class="main-card-fixtures">
            <h4>Fixtures</h4>                        
            <TableContainer component={ Paper } style={{ maxHeight: 400, overflow: 'auto' }}>
                <Table stickyHeader className={ classes.table } aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Event Date</TableCell>
                            <TableCell align="center">Event Timestamp</TableCell>
                            <TableCell align="center">First Half Start</TableCell>
                            <TableCell align="center">Second Half Start</TableCell>
                            <TableCell align="center">Round</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Elapsed</TableCell>
                            <TableCell align="center">Venue</TableCell>
                            <TableCell align="center">HomeTeam</TableCell>
                            <TableCell align="center">AwayTeam</TableCell>
                            <TableCell align="center">Goals HomeTeam</TableCell>
                            <TableCell align="center">Goals AwayTeam</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    { fixtures.map((row) => (
                        <TableRow key={ row.team_id }>
                            <TableCell component="th" scope="row" align="center">{ formatDate(row.event_date) }</TableCell>
                            <TableCell align="left">{ getTime(row.event_timestamp) }</TableCell>
                            <TableCell align="center">{ getTime(row.firstHalfStart) }</TableCell>
                            <TableCell align="center">{ getTime(row.secondHalfStart) }</TableCell>
                            <TableCell align="center">{ row.round }</TableCell>
                            <TableCell align="center">{ row.status }</TableCell>
                            <TableCell align="center">{ row.elapsed }</TableCell>
                            <TableCell align="center">{ row.venue }</TableCell>
                            <TableCell align="center">{ row.homeTeam.team_name }</TableCell>
                            <TableCell align="center">{ row.awayTeam.team_name }</TableCell>
                            <TableCell align="center">{ row.goalsHomeTeam }</TableCell>
                            <TableCell align="center">{ row.goalsAwayTeam }</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>         
    );
}

FixturesTable.displayName = 'FixturesTable';

export default FixturesTable;
