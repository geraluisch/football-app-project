import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Link from '@material-ui/core/Link';
import './../../assets/css/styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width:'100%'
  },
  gridList: {
    width: '100%',
    height: 'calc(100vh - 350px)'  
  },  
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


const Teams = ({ teamsLeague }) => {
  const classes = useStyles();
  const { teams } = teamsLeague;
  const league_id = window.location.pathname.split('/')[3];  

  return (         
    <div class="main-card-league team-style">
        <h4>TEAMS</h4>
        <div className={ classes.root }>
          <GridList cellHeight={ 180 } className={ classes.gridList } cols={ 3 }>      
            {teams.map((team) => (         
              <GridListTile key={ team.team_id }>
                <img src={ team.logo } alt={ team.name } />
                <GridListTileBar
                  title={team.name}
                  subtitle={ <span>City: { team.venue_city }</span> }
                  actionIcon={
                    <Link   href={`/teams/team/${ league_id }/${ team.team_id }`}>                    
                      <IconButton aria-label={`info about ${team.name}`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    </Link>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
    </div>            

  );
}

Teams.displayName = 'Teams';

export default Teams;
