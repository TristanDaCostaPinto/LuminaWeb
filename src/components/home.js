import React, { useState, createRef, useEffect } from 'react'
import { Slider, Card, CardActionArea, CardActions, CardContent, CardMedia, InputLabel, Input, Select, MenuItem, RadioGroup, Radio, FormControlLabel, FormLabel, TextField, Button, Typography, Grid, Container, makeStyles, } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import Banner from '../img/home/bannière.gif'
import Footer from '../addons/footer/footer'
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	banner: { height: 'auto', width: '100%' },
	subHeader1: { order: 1, width: "80%", backgroundColor: 'white' },
	subHeader2: { order: 2, width: "40%", padding: 50, flexDirection: 'column', backgroundColor: 'white', borderTopRightRadius: '5px', borderBottomRightRadius: '5px', marginBottom: 100 },
	subHeader3: { padding: 50, borderRadius: 30 },
	maxWidthCustom: { backgroundColor: '#704EA6', color: 'white', border: 'none' },
	leftTitle: { color: 'black', fontSize: 17 },
	rightTitle: { color: 'red', fontSize: 18 },
	title: { color: 'black', fontSize: 16 },
	titleProperty: { color: '#704EA6', fontSize: 24, marginTop: 10, fontWeight: 'bold' },
	properties: { backgroundColor: 'white', border: 'grey' },
	container: { backgroundColor: 'white' }
}));

const namesAddonsProperties = ['Terrasse', 'Balcon', 'Jardin', 'Piscine', 'Cheminée', 'Bureau', 'Cuisine Aménagée', 'Grenier', 'Cave', 'Garage', 'Plein Pied', 'Dressing', 'Ascenseur'];

const marks = [{ value: 100000, label: '100k', }, { value: 200000, label: '200k', }, { value: 300000, label: '300k', }, { value: 400000, label: '400k', }, { value: 500000, label: '500k', }, { value: 600000, label: '600k', }, { value: 700000, label: '700k', }];

export default function Home() {

	const classes = useStyles();
	const ref = createRef();
	const history = useHistory();
	const [valueParameterHomePage, setValueParameters] = useState([]);
	const [properties, setProperties] = useState([]);

	useEffect(() => {
		axios.get("http://www.share-your-universe.com/public/api/v1/properties").then(response => {
			console.log(response.data)
			setProperties(response.data);
		})
	});

	const handleChangePriceProperties = (event, newValue) => {
		const priceProperties = newValue;
		setValueParameters(valueParameter => ({ ...valueParameter, "Prix": priceProperties.toString() }));
	}

	const [orientation, setOrientation] = useState('');
	const handleOrientation = (event) => {
		const orientation = event.target.value;
		setOrientation(orientation);
		setValueParameters(valueParameter => ({ ...valueParameter, "Orientation": orientation }));
	}

	const [typeProperties, setTypeProperties] = useState('');
	const handleChangeTypeProperties = (event) => {
		const typeProperties = event.target.value;
		setTypeProperties(typeProperties);
		setValueParameters(valueParameter => ({ ...valueParameter, "Type de Bien": typeProperties }));
	}

	const [pieceProperties, setPieceProperties] = useState('');
	const handleChangePieceProperties = (event) => {
		const pieceProperties = event.target.value;
		setPieceProperties(pieceProperties);
		setValueParameters(valueParameter => ({ ...valueParameter, "Pièces": pieceProperties }));
	}

	const [addonsProperties, setAddonsProperties] = useState([]);
	const handleChangeAddonsProperties = (event) => {
		const addonsProperties = event.target.value;
		setAddonsProperties(addonsProperties);
		setValueParameters(valueParameter => ({ ...valueParameter, "Spécificités": addonsProperties.join(', ') }));
	}

	// Fonction au clic sur le bouton FILTRER
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push({
			pathname: '/properties',
			dataFilters: valueParameterHomePage
		})
	}

	const goToProperty = (id) => {
		history.push(`/property/${id}`);
	}

	return (
		<div>
			<Container maxWidth="xl" className={classes.properties}>
				<Grid container spacing={3} className={classes.container}>
					{/* Bannière */}
					<Grid item md={7} xs={12} className={classes.subHeader1}>
						<img src={Banner} alt="Présentation Lumina" className={classes.banner} />
					</Grid>

					{/* Filtres */}
					<Grid item md={5} xs={12} className={classes.subHeader2}>
						<form onSubmit={handleSubmit} style={{ width: '100%' }}>
							<Grid container spacing={3} style={{ justifyContent: 'center' }}>

								{/* Bloc filtre budget */}
								<Grid item xs={11}>
									<Typography id="discrete-slider-always" gutterBottom>Budget Maximum</Typography>
									<Slider defaultValue={50000} aria-labelledby="discrete-slider-always" step={10000} marks={marks} min={50000} max={800000} onChange={handleChangePriceProperties} valueLabelDisplay="auto" />
								</Grid>

								{/* Bloc filtre type du bien */}
								<Grid item xs={12}>
									<FormLabel component="legend">Type de Biens :</FormLabel>
									<RadioGroup row aria-label="typeProperties" name="typeProperties" value={typeProperties} onChange={handleChangeTypeProperties}>
										<FormControlLabel value="Maison" control={<Radio />} label="Maison" />
										<FormControlLabel value="Appartement" control={<Radio />} label="Appartement" />
										<FormControlLabel value="Terrain" control={<Radio />} label="Terrain" />
										<FormControlLabel value="Commerce" control={<Radio />} label="Commerce" />
									</RadioGroup>
								</Grid>

								{/* Bloc filtre de l'orientation */}
								<Grid item xs={12}>
									<FormLabel component="legend">Orientation :</FormLabel>
									<RadioGroup row aria-label="orientation" name="orientation" value={orientation} onChange={handleOrientation}>
										<FormControlLabel value="Nord" control={<Radio />} label="Nord" />
										<FormControlLabel value="Sud" control={<Radio />} label="Sud" />
										<FormControlLabel value="Est" control={<Radio />} label="Est" />
										<FormControlLabel value="Ouest" control={<Radio />} label="Ouest" />
									</RadioGroup>
								</Grid>

								{/* Bloc filtre nombre de pièces */}
								<Grid item xs={12}>
									<TextField label="Combien de pièces ?" variant="outlined" fullWidth InputLabelProps={{ shrink: true, }} type='text' name='piecesProperty' value={pieceProperties} onChange={handleChangePieceProperties} />
								</Grid>

								{/* Bloc filtre spécifité */}
								<Grid item xs={12}>
									<InputLabel id="labelAddonsProperties">Spécificités à ajouter</InputLabel>
									<Select labelId="labelAddonsProperties" id="selectAddonsProperties" fullWidth multiple value={addonsProperties} onChange={handleChangeAddonsProperties} input={<Input id="select-multiple-chip" />} ref={ref}>
										{namesAddonsProperties.map((name) => (
											<MenuItem key={name} value={name}>
												{name}
											</MenuItem>
										))}
									</Select>
								</Grid>

								{/* Bouton filtrer */}
								<Grid item xs={12} md={6}>
									<Button type="submit" className={classes.maxWidthCustom}>Filtrer</Button>
								</Grid>

								{/* Bouton Réinitialiser */}
								<Grid item xs={12} md={6}>
									<Button type="button" className={classes.maxWidthCustom} onClick={() => window.location.reload()}>Réinitialiser</Button>
								</Grid>
							</Grid>
						</form>
					</Grid>
				</Grid>

				<p className={classes.titleProperty}>Derniers biens ajoutés</p>
				<Grid container spacing={3} xs={12} md={12} className={classes.subHeader3}>
					{properties.property != null || properties.property !== undefined ?
						Object.keys(properties.property).map((item) =>
							<Grid item xl={3} md={6} xs={12} key={properties.property[item]["idProperty"]}>
								<Card>
									<CardActionArea>
										<CardMedia component="img" alt="Image du Bien" height="140" image={properties.property[item]["parameters"][8]["valueParameter"]} title="Image du Bien" />
										<CardContent>
											<Typography variant="body2" component="p">
												<Grid container spacing={1}>
													<Grid item md={9} xs={12} className={classes.leftTitle}>
														{properties.property[item]["parameters"][1]["valueParameter"] +
															" " + properties.property[item]["parameters"][3]["valueParameter"] +
															" Pièces - " + properties.property[item]["parameters"][2]["valueParameter"]}
													</Grid><Grid item md={3} xs={12} className={classes.rightTitle}>{properties.property[item]["parameters"][0]["valueParameter"] / 1000 + " K€"}</Grid>

													<Grid item xs={12} className={classes.title}>{properties.property[item]["parameters"][4]["valueParameter"]}</Grid>
													<Grid item xs={12}>
														<p>Superficie: {properties.property[item]["parameters"][2]["valueParameter"]}</p>
														<p>Orientation: {properties.property[item]["parameters"][6]["valueParameter"]}</p>
													</Grid>
												</Grid>
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button className={classes.maxWidthCustom} variant="outlined" onClick={() => goToProperty(properties.property[item]["idProperty"])}>Voir plus de détails</Button>
									</CardActions>
								</Card>
							</Grid>
						) : <p>Impossible d'afficher les dernières propriétés</p>}
				</Grid>
			</Container>
			<Footer />
		</div>
	)
};
