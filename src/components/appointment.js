import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from 'axios';
import clsx from 'clsx';
import {
    makeStyles,
    CssBaseline,
    Typography,
    Container,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';

import ProfileNavbar from '../addons/profileNavbar';
import AskAppointment from '../addons/profile/askAppointment';
import { AppointmentType } from '../helpers/appointmentHelp';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
    },
    fixedHeight: {
        height: 'auto',
    },
}));

export default function Appointment() {

    const { user: currentUser } = useSelector((state) => state.auth);

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {

        axios.get("http://www.share-your-universe.com/public/api/v1/appointments", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${currentUser.token}`,
            }
        }).then(response => {
            setAppointments(response.data.appointment.filter(result => result.idUser === currentUser.user.idUser));
        });
    }, [currentUser.token, currentUser.user.idUser]);

    if (!currentUser) {
        return <Redirect to='/login' />;
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <ProfileNavbar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="xl" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={fixedHeightPaper}>
                                Liste de tes Rendez-vous
                                {!appointments.length ? <Typography>Aucun rendez-vous</Typography> :
                                    <TableContainer>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Date du Rendez-vous</TableCell>
                                                    <TableCell align="right">Motif</TableCell>
                                                    <TableCell align="right">Type de Rendez-vous</TableCell>
                                                    <TableCell align="right">Agent mobilisé</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {appointments.map(item =>
                                                    <TableRow key={item.idAppointment}>
                                                        <TableCell component="th" scope="row">{item.appointmentDate}</TableCell>
                                                        <TableCell align="right">{item.appointmentMotif}</TableCell>
                                                        <TableCell align="right">{AppointmentType(item.appointmentType)}</TableCell>
                                                        <TableCell align="right">{item.appointmentAgent}</TableCell>
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                }
                                <AskAppointment />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}