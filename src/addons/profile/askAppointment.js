import React, { useState } from 'react';
import {
    Button,
    TextField,
    Select,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    InputLabel,
    MenuItem
} from '@material-ui/core';

export default function AskAppointment() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [typeAppointment, setTypeAppointment] = React.useState('');

    const handleChange = (event) => {
        setTypeAppointment(event.target.value);
    };

    return (
        <div style={{ marginTop: 15 }}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Demander un rendez-vous
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Demande de Rendez-vous</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Veuillez remplir les champs pour toutes demandes de rendez-vous
                    </DialogContentText>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                margin="dense"
                                id="lastname"
                                label="Nom"
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                margin="dense"
                                id="firstname"
                                label="Prénom"
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="dense"
                                id="email"
                                label="Adresse Email"
                                type="email"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id="labelTypeAppointment">Type de demande de rendez-vous</InputLabel>
                            <Select
                                fullWidth
                                value={typeAppointment}
                                onChange={handleChange}
                                labelId="labelTypeAppointment"
                                id="selectTypeAppointment"
                            >
                                <MenuItem value="Visite">Visite</MenuItem>
                                <MenuItem value="Renseignement">Renseignement</MenuItem>
                                <MenuItem value="Estimation">Estimation</MenuItem>
                                <MenuItem value="Location">Location</MenuItem>
                                <MenuItem value="Achat">Achat</MenuItem>
                                <MenuItem value="Vente">Vente</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="dense"
                                id="message"
                                label="Message"
                                type="text"
                                multiline
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Annuler
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Envoyer
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
