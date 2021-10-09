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
    Link
} from '@material-ui/core';

import ProfileNavbar from '../addons/profileNavbar';

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
        height: 240,
    },
}));

export default function Profile() {

    const { user: currentUser } = useSelector((state) => state.auth);

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [documents, setDocuments] = useState([]);

    useEffect(() => {

        axios.get("http://www.share-your-universe.com/public/api/v1/documents", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${currentUser.token}`,
            }
        }).then(response => {
            setDocuments(response.data.document.filter(result => result.idUser === currentUser.user.idUser));
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
                                Liste de tes Documents
                                {!documents.length ? <Typography>Aucun documents</Typography> :
                                    <TableContainer>
                                        <Table aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Type de document</TableCell>
                                                    <TableCell>Lien du document</TableCell>
                                                    <TableCell>Télécharger le fichier</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {documents.map(item =>
                                                    <TableRow key={item.idDocument}>
                                                        <TableCell>{item.documentType}</TableCell>
                                                        <TableCell><Link href={item.AcceptdocumentURL}>Voir le fichier</Link></TableCell>
                                                        <TableCell><Link href="">Télécharger</Link></TableCell>
                                                    </TableRow>
                                                )}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                }
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}