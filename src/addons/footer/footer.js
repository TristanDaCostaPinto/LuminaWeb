import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Divider,
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';

import Logo from '../../img/footer/Logo.png'
import GooglePlay from '../../img/footer/googlePlay.png';
import Facebook from '../../img/footer/facebook.png';
import Twitter from '../../img/footer/twitter.png';
import Instagram from '../../img/footer/instagram.png';

import ContactUs from './contactUs';
import ModalAgenciesList from './agenciesList';
import LegalDisclaimer from './legalDisclaimer';

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: 'hidden',
        marginTop: '10px',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(0.5),
    },
    logo: {
        width: 175,
        height: 175,
    },
    alignitems: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    googlePlayImg: {
        width: 150,
        height: 50,
    },
    socials: {
        width: 50,
        height: 50,
    },
    listFooter: {
        marginTop: '10px',
        marginBottom: '10px',
    }
}))

export default function Footer() {
    const classes = useStyles();

    const arraySocials = [
        {
            socialsImg: Facebook,
            socialsLink: 'https://facebook.com',
            alt: 'ImageFacebookFooter',
        },
        {
            socialsImg: Twitter,
            socialsLink: 'https://twitter.com',
            alt: 'ImageTwitterFooter',
        },
        {
            socialsImg: Instagram,
            socialsLink: 'https://instagram.com',
            alt: 'ImageInstagramFooter',
        }
    ];

    return (
        <div className={classes.root}>
            <Divider />
            <Container maxWidth="xl" className={classes.container}>
                <Grid container className={classes.alignitems}>
                    <Grid item md={3} xs={12}>
                        <img alt="ImageLogoFooter" src={Logo} className={classes.logo} />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Grid container>
                            <Grid item xs={12} className={classes.listFooter}>
                                <ContactUs />
                            </Grid>
                            <Grid item xs={12} className={classes.listFooter}>
                                <ModalAgenciesList />
                            </Grid>
                            <Grid item xs={12} className={classes.listFooter}>
                                <LegalDisclaimer />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Grid container>
                            {
                                arraySocials.map(singleSocials =>
                                    <Grid item md={4} xs={12} className={classes.listFooter} key={singleSocials.alt}>
                                        <Link to={{ pathname: singleSocials.socialsLink }} target="blank">
                                            <img alt={singleSocials.alt} src={singleSocials.socialsImg} className={classes.socials} />
                                        </Link>
                                    </Grid>
                                )
                            }
                            <Grid item xs={12}>
                                <Typography>
                                    Rejoignez-nous sur les réseaux sociaux
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Grid container>
                            <Grid item xs={12} className={classes.listFooter}>
                                <Link to={{ pathname: "https://play.google.com/store" }} target="blank">
                                    <img alt="ImageGooglePlayFooter" src={GooglePlay} className={classes.googlePlayImg} />
                                </Link>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    Téléchargez notre application mobile
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
        </div>
    );
}