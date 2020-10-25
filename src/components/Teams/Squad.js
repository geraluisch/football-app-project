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

const Squad = ({ squad }) => {
    const classes = useStyles();

    const { players } = squad;
        
    return (
        <div>
            <h4>SQUAD</h4>                        
            <TableContainer component={ Paper } style={{ maxHeight: 230, overflow: 'auto' }}>
                <Table stickyHeader className={ classes.table } aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Player Name</TableCell>
                            <TableCell align="center">Number</TableCell>
                            <TableCell align="center">Position</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Birth Date</TableCell>
                            <TableCell align="center">Birth Place</TableCell>
                            <TableCell align="center">Birth Country</TableCell>
                            <TableCell align="center">Nationality</TableCell>
                            <TableCell align="center">Height</TableCell>
                            <TableCell align="center">Weight</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {players.map((row) => (
                        <TableRow key={ row.player_id } >
                            <TableCell component="th" scope="row" align="center">{ row.player_name }</TableCell>
                            <TableCell align="left">{ row.number}</TableCell>
                            <TableCell align="center">{ row.position }</TableCell>
                            <TableCell align="center">{ row.age }</TableCell>
                            <TableCell align="center">{ row.birth_date }</TableCell>
                            <TableCell align="center">{ row.birth_place }</TableCell>
                            <TableCell align="center">{ row.birth_country }</TableCell>
                            <TableCell align="center">{ row.nationality }</TableCell>
                            <TableCell align="center">{ row.height }</TableCell>
                            <TableCell align="center">{ row.weight }</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>         
    );
}

Squad.displayName = 'Squad';

export default Squad;
