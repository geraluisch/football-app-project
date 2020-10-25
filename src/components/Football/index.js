import React, { Fragment, useContext } from 'react';
import { HomeContext } from './../../contexts/HomeContext';
import Leagues from './Leagues';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';
import Message from './../Common/Message';
import './../../assets/css/styles.css';


const Football = () => {
    const { doneFetch, currentLeagues } = useContext(HomeContext);
    let rows = [];
    let skeletonRows = [];
    for (let i=0; i < 5; i++) 
        skeletonRows.push(<Skeleton width="100%" />)        
    
    for (let i=0; i < 6; i++) {
        rows.push( <div class="main-card-loading">
                        <div class="box-league-logo-loading">
                            <Skeleton variant="rect" width={ 150 } height="100%" />    
                        </div>
                        <div class="card-item-loading">
                            <Box pt={0.5}>
                                { skeletonRows }                                
                            </Box>                                     
                        </div>            
                    </div> )
    }
    return (
        <Fragment>             
            {   
                doneFetch ?
                    ( currentLeagues.results > 0 ? <Leagues  currentLeagues={ currentLeagues.leagues } /> : <Message text='Error' /> )
                :                    
                    ( <main>{ rows }</main> )
            }
        </Fragment>
      
   
        
    );
}

Football.displayName = 'Football';

export default Football;