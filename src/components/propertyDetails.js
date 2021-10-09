import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    Grid,
    Container,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Chip,
    CircularProgress,
    Paper,
    makeStyles,
} from '@material-ui/core';
import PropertyStatus from '../addons/propertyStatus';

import Footer from '../addons/footer/footer';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const useStyles = makeStyles((theme) => ({
    row: {
        border: '1px solid',
        borderRadius: '10px',
        padding: '5px',
        backgroundColor: 'whitesmoke',
        margin: '5px 0px',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(2, 0, 2),
        backgroundColor: '#47A8BD',
        color: 'whitesmoke',
    },
    textarea: {
        width: '100%',
    },
    chip: {
        width: '100%',
        borderColor: '#47A8BD',
        borderRadius: '10px',
        padding: theme.spacing(1),
        fontSize: '15px',
    },
    title: {
        marginTop: 0,
        textAlign: 'center',
        fontSize: '20px',
        color: '#47A8BD',
    },
    paper: {
        padding: theme.spacing(1.5),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    paperContent: {
        margin: theme.spacing(0.3),
    },
    fixedHeight: {
        height: '100%',
    },
    carouselCss: {
        height: 500,
        width: '100%',
    },
    alignItems: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    infoHeadProperty: {
        fontSize: '20px',
    }
}));

export default function PropertyDetails() {

    const [isLoading, setLoading] = useState(true);
    const [property, setProperty] = useState([]);
    const { id } = useParams();
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    useEffect(() => {
        axios.get(`http://www.share-your-universe.com/public/api/v1/property/${id}`).then(response => {
            setProperty(response.data);
            setLoading(false);
        });
    }, [id]);

    if (isLoading) {
        return <div style={{ textAlign: 'center' }}><CircularProgress /></div>;
    }

    const images = property.pictures.map((picture) => ({
        src: picture.pictureURL,
        alt: 'ImageGalery' + Math.floor(Math.random() * 101)
    }));

    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={fixedHeightPaper}>
                            <p className={classes.title}>Informations du bien</p>
                            <Grid container className={classes.alignItems}>
                                <Grid item md={4} xs={12} className={classes.infoHeadProperty}>
                                    Status du bien : {PropertyStatus(property.property.propertyStatus)}
                                </Grid>
                                <Grid item md={4} xs={12} className={classes.infoHeadProperty}>
                                    Type de bien : {property.parameters[1]["valueParameter"]}
                                </Grid>
                                <Grid item md={4} xs={12} className={classes.infoHeadProperty}>
                                    Prix du bien : {property.parameters[0]["valueParameter"] + " €"}
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Paper className={fixedHeightPaper}>
                            <img alt={property.parameters[8]["keyParameter"]} src={property.parameters[8]["valueParameter"]} style={{ width: '100%', height: 500 }} fluid="true" />
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Paper className={fixedHeightPaper}>
                            <Carousel className={classes.carouselCss} images={images} />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item md={12}>
                        <Paper className={fixedHeightPaper}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12}>
                                    <p className={classes.title}>Détails du bien</p>
                                    <Grid container className={classes.alignItems}>
                                        {
                                            property.parameters.map(param =>
                                                <Grid item md={10} sm={12} className={classes.paperContent} key={param.valueParameter + Math.floor(Math.random() * 101)}>
                                                    <Chip label={param.keyParameter + ' : ' + param.valueParameter} variant="outlined" className={classes.chip} />
                                                </Grid>
                                            ).slice(2, -1)
                                        }
                                    </Grid>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <p className={classes.title}>Détails des Pièces</p>
                                    <Grid container className={classes.alignItems}>
                                        {
                                            property.pieces.map(piece =>
                                                <Grid item md={10} sm={12} className={classes.paperContent} key={piece.pieceName + Math.floor(Math.random() * 101)}>
                                                    <Chip label={piece.pieceName + ' : ' + piece.pieceSurface + " m²"} variant="outlined" className={classes.chip} />
                                                </Grid>
                                            )
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <Paper className={fixedHeightPaper}>
                            <p className={classes.title}>Contactez-nous pour plus de renseignements</p>
                            <form className={classes.form} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="fname"
                                            name="firstName"
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="Prénom"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Nom de Famille"
                                            name="lastName"
                                            autoComplete="lname"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Adresse e-mail"
                                            name="email"
                                            autoComplete="email"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            name="phoneNumber"
                                            label="Téléphone"
                                            type="tel"
                                            id="phoneNumber"
                                            autoComplete="current-password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="messageCustomer"
                                            label="Message"
                                            multiline
                                            rows={4}
                                            required
                                            variant="outlined"
                                            className={classes.textarea}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="J'accepte de recevoir des offres par mail."
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <FormControlLabel
                                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                                            label="J'accepte que mes données soient transférées aux partenaires du Réseau Lumina."
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    className={classes.submit}
                                >
                                    Envoyer le message
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Paper className={fixedHeightPaper}>
                            <p className={classes.title}>Votre Contact</p>
                            <img alt="Maison" src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: '100%' }} fluid="true" /><br />
                            Nom de l'agent : Mickael Lumina<br />
                            Coordonnées de l'agent / l'agence : Lumina Le Havre - Avenue de la République<br />
                            Téléphone de l'agent / l'agence : 0102030405<br />
                        </Paper>
                    </Grid>
                </Grid>
                <Footer />
            </Container>
        </div >
    )
}