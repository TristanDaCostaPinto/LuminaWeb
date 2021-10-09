import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    makeStyles,
    CssBaseline,
    Drawer,
    Hidden,
    List,
    ListItem,
    useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { logout } from "../actions/auth";

import Logo from '../img/navbar/Logo.png';

const drawerWidth = 240; // Largeur sidebar mobile

const useStyles = makeStyles((theme) => ({ // CSS
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    drawer: { // Sidebar Mobile
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: { // Navbar tous support
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#47A8BD',
    },
    menuButton: { // Boutons sidebar
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: { // Contenu en dessous de la nav
        flexGrow: 1,
        marginTop: theme.spacing(15),
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(10),
        },
    },
    closeMenuButton: { // Bouton Fermeture sidebar
        marginRight: 'auto',
        marginLeft: 0,
        color: '#47A8BD',
    },
    title: { // Titre
        flexGrow: 1,
    },
    navLink: { // Liste des éléments de la nav
        display: 'inherit',
        fontSize: '40px',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    textNavLink: {
        textDecoration: 'none',
        color: '#F5F5F5',
        '&:hover': {
            color: 'black',
            backgroundColor: 'transparent',
        }
    },
    textNavLinkMobile: {
        textDecoration: 'none',
        color: '#47A8BD',
        '&:hover': {
            color: 'black',
        }
    },
    logo: {
        width: 50,
        height: 50,
    }
}));

export default function Navigation() {

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();

    const classes = useStyles();

    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const logOut = () => {
        dispatch(logout());
    };

    function handleDrawerToggle() { // Fonction ouverture sidebar
        setMobileOpen(!mobileOpen)
    }

    const goToPage = (namePage) => {
        if (namePage === 'Déconnexion') {
            history.push(`/login`);
            return logOut
        } else {
            history.push(`/${namePage}`)
        }
    }

    const drawer = ( // Liste éléments navigation
        <div>
            <List>
                
                <Button onClick={() => goToPage('')} className={classes.textNavLinkMobile}>
                    <ListItem>
                        Accueil
                    </ListItem>
                </Button>
                <Button onClick={() => goToPage('properties')} className={classes.textNavLinkMobile}>
                    <ListItem>
                        Propriétés
                    </ListItem>
                </Button>

                {currentUser ? (
                    <div>
                        <Button onClick={() => goToPage('profile')} className={classes.textNavLinkMobile}>
                            <ListItem>
                                Profil
                            </ListItem>
                        </Button>
                        <Button onClick={() => { goToPage('login'); logOut() }} className={classes.textNavLinkMobile}>
                            <ListItem>
                                Déconnexion
                            </ListItem>
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Button onClick={() => goToPage('login')} className={classes.textNavLinkMobile}>
                            <ListItem>
                                Connexion
                            </ListItem>
                        </Button>

                        <Button onClick={() => goToPage('register')} className={classes.textNavLinkMobile}>
                            <ListItem>
                                Inscription
                            </ListItem>
                        </Button>
                    </div>
                )}
            </List>
        </div >
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <Button onClick={() => goToPage('')} className={classes.textNavLink}>
                            <img alt="ImageLogoNavbar" src={Logo} className={classes.logo} />
                        </Button>
                        <Button onClick={() => goToPage('')} className={classes.textNavLink}>
                            Lumina
                        </Button>
                    </Typography>
                    <div className={classes.navLink}>
                        <span>
                            <Button onClick={() => goToPage('')} className={classes.textNavLink}>
                                Accueil
                            </Button>
                            <Button onClick={() => goToPage('properties')} className={classes.textNavLink}>
                                Propriétés
                            </Button>
                        </span>

                        {currentUser ? (
                            <span>
                                <Button onClick={() => goToPage('profile')} className={classes.textNavLink}>
                                    Profil
                                </Button>
                                <Button onClick={() => { goToPage('login'); logOut() }} className={classes.textNavLink}>
                                        Déconnexion
                                </Button>
                            </span>
                        ) : (
                            <span>
                                <Button onClick={() => goToPage('login')} className={classes.textNavLink}>
                                    Connexion
                                </Button>
                                <Button onClick={() => goToPage('register')} className={classes.textNavLink}>
                                    Inscription
                                </Button>
                            </span>
                        )}
                    </div>
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                            <CloseIcon />
                        </IconButton>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <div className={classes.content} />
        </div>
    );
}