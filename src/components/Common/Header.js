import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { prueba } from './../../constants';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import logo from './../../assets/img/logo.png';
import photo from './../../assets/img/photo.jpg';
import './../../assets/css/styles.css';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',       
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },   
}));

const Header = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [apiUserKey, setApiUserKey] = useState('');

    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(true);      
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveApi = () => {
        setApiUserKey(document.querySelector('#api-input').value);  
        localStorage.setItem('apiUserKey', document.querySelector('#api-input').value);     
        setOpen(false);
    };

    // <header>
    //     <div className="box-logo">  
    //         <img src={ logo } alt=""/> 
    //     </div>
    //     <nav>   
    //         <ul>
    //             <li><a href="/">HOME</a></li>
    //             <li><a href="/search/league">LEAGUES</a></li>
    //             <li><a href="/search/fixturex">FIXTURES</a></li>
    //             <li><a href="#">ABOUT</a></li>
    //         </ul>
    //     </nav>        
    // </header>  
    
    return (
        <Fragment>        
            <header>
                <div className="box-logo">  
                    <img src={ logo } alt=""/> 
                </div>
                <nav>   
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/search/league">LEAGUES</a></li>
                        <li><a href="/search/fixturex">FIXTURES</a></li>
                        <li><a href="#" onClick={ handleOpen }>ABOUT</a></li>
                    </ul>
                </nav>                    
            </header> 
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                >
                <Fade in={open}>                   
                    <div className={ classes.paper }>
                        <h2 id="transition-modal-title">Final React Project</h2>                       
                        <p id="transition-modal-title">Created by Luis Chourio</p>
                        <div className="avatar-photo" >
                            <Avatar alt="Luis Chourio" src={ photo } />
                        </div>
                        {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
                        <p id="transition-modal-title">This project consume the next api: </p> 
                        <a href="https://www.api-football.com/" target="_blank" rel="noopener noreferrer">https://www.api-football.com/</a>
                        <div className="div-api-key-2">
                            <p>Api Key</p>
                        </div>                        
                        <div className="input-api-key-2" >                            
                            {/* <TextField id="outlined-basic" label="Insert an api key" variant="outlined" /> */}
                            <input placeholder="Insert an api key" type="text" id="api-input" defaultValue={ apiUserKey === '' ? localStorage.getItem('apiUserKey') : apiUserKey }></input>
                            <Button variant="contained" onClick={ saveApi } >Save</Button> 
                        </div>
                    </div>                   
                </Fade>
            </Modal>
        </Fragment>
      );
};

Header.displayName = 'Header';

export default Header;