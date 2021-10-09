import React, { useState } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Checkbox,
    FormControlLabel,
    Grid,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
}))

export default function ContactUs() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ marginTop: 15 }}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Contactez-nous
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Contactez-nous</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Veuillez remplir les champs pour toutes demandes de contact
                    </DialogContentText>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
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
                                    type="email"
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Annuler
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
