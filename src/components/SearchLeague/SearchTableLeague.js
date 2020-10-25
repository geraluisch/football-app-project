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


const SearchTableLeague = ({ countryLeagues }) => {
  const classes = useStyles();
  const { leagues } = countryLeagues;  

  return (         
    <div class="main-card-league team-style">
        <h4>LEAGUES</h4>
        <div className={ classes.root }>
          <GridList cellHeight={ 180 } className={ classes.gridList } cols={ 4 }>      
            {leagues.map((league) => (         
              <GridListTile key={ league.league_id }>
                <img src={ league.logo } alt={ league.name } />
                <GridListTileBar
                  title={league.name}
                  subtitle={ <span>Season: { league.season }</span> }
                  actionIcon={
                    <Link   href={`/leagues/league/${ league.league_id }`}>                    
                      <IconButton aria-label={`info about ${league.name}`} className={classes.icon}>
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

SearchTableLeague.displayName = 'SearchTableLeague';

export default SearchTableLeague;
