import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Grid,
    Modal,
    Backdrop,
    Button,
    Fade,
    makeStyles,
    Typography,
    Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundModal: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    imgGrid: {
        padding: '0px !important',
        margin: 0
    },
    img: {
        width: 128,
        height: 128,
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    adressAgency: {
        paddingRight: '5px',
    },
}));

export default function TransitionsModal() {
    const classes = useStyles();
    const [agencies, setAgencies] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        axios.get("http://www.share-your-universe.com/public/api/v1/agencies")
            .then(response => {
                setAgencies(response.data.agency);
            });
    }, []);

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleOpen}>
                Voir la liste des agences
            </Button>
            <Modal
                aria-labelledby="TitleModalAgenciesList"
                aria-describedby="DescriptionModalAgenciesList"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open} style={{ width: '85%', height: 'auto' }}>
                    <div className={classes.backgroundModal}>
                        <Grid container spacing={5}>
                            {
                                agencies.map(singleAgency =>
                                    <Grid item md={6} xs={12} key={singleAgency.agencyName}>
                                        <Paper>
                                            <Grid container spacing={2}>
                                                <Grid item className={classes.imgGrid}>
                                                    <img className={classes.img} alt={"Agence " + singleAgency.agencyName} src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                                </Grid>
                                                <Grid item xs={12} sm container>
                                                    <Grid item xs container direction="column" spacing={2}>
                                                        <Grid item xs>
                                                            <Typography gutterBottom variant="subtitle1">
                                                                {singleAgency.agencyName}
                                                            </Typography>
                                                            <Typography variant="body2" gutterBottom>
                                                                Email : {singleAgency.agencyContact}
                                                            </Typography>
                                                            <Typography variant="body2">
                                                                Téléphone : {singleAgency.agencyPhone}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="subtitle1" className={classes.adressAgency}>
                                                            {singleAgency.agencyAdr}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                )
                            }
                        </Grid>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}