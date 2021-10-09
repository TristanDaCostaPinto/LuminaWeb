import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    Grid,
    FormLabel,
    RadioGroup,
    Radio,
    makeStyles,
} from '@material-ui/core';

const validationSchema = yup.object({
    surfaceProperty: yup
        .string('Entrez une surface en m²')
        .required('La surface du bien est requise'),
    piecesProperty: yup
        .string('Entrez le nombre de pièces de votre bien')
        .required('Le nombre de pièces du bien est requise'),
});

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

export default function Estimate() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            typeProperty: '',
            surfaceProperty: '',
            piecesProperty: '',
            travauxProperties: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const pieces = 2500 * values.piecesProperty
            const surface = 4500 * values.surfaceProperty
            const total = Number(values.travauxProperties) + Number(pieces) + Number(surface)
            alert("Votre " + values.typeProperty + " a été estimé à " + total + "€.");
        },
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ marginTop: 15 }}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Formulaire de mise en vente
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Mettez en vente votre bien</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Veuillez remplir les champs pour mettre en vente votre Bien
                    </DialogContentText>
                    <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormLabel component="legend">Type de Biens :</FormLabel>
                                <RadioGroup row aria-label="typeProperty"
                                    name="typeProperty"
                                    onChange={formik.handleChange}
                                    value={formik.values.typeProperty}
                                >
                                    <FormControlLabel value="Maison" control={<Radio />} label="Maison" />
                                    <FormControlLabel value="Appartement" control={<Radio />} label="Appartement" />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Surface (en m²) ?"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type='text'
                                    name='surfaceProperty'
                                    value={formik.values.surfaceProperty}
                                    onChange={formik.handleChange}
                                    error={formik.touched.surfaceProperty && Boolean(formik.errors.surfaceProperty)}
                                    helperText={formik.touched.surfaceProperty && formik.errors.surfaceProperty}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Combien de pièces ?"
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type='text'
                                    name='piecesProperty'
                                    value={formik.values.piecesProperty}
                                    onChange={formik.handleChange}
                                    error={formik.touched.piecesProperty && Boolean(formik.errors.piecesProperty)}
                                    helperText={formik.touched.piecesProperty && formik.errors.piecesProperty}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormLabel component="legend">Travaux à prévoir ?</FormLabel>
                                <RadioGroup row aria-label="travauxProperties"
                                    name="travauxProperties"
                                    onChange={formik.handleChange}
                                    value={formik.values.travauxProperties}
                                >
                                    <FormControlLabel value="5000" control={<Radio />} label="Oui" />
                                    <FormControlLabel value="2500" control={<Radio />} label="Non" />
                                </RadioGroup>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                        >
                            Envoyer la demande de mise en vente
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
