import React, { useState, useRef, useEffect } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    title: {
        fontSize: '25px',
    },
    text: {
        fontSize: '15px',
    },
}))

export default function LegalDisclaimer() {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const classes = useStyles();

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen('paper')}>Mentions Légales</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                maxWidth='lg'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Mentions Légales</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        component={'div'}
                    >
                        
                            <p className={classes.title}>Informations légales</p>
                            <p className={classes.title}>1. Présentation du site.</p>
                            <p className={classes.text}>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <a href="//lumina.fr/">lumina.fr</a> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
                            <p className={classes.text}>
                                <strong>Propriétaire</strong> : Patron Lumina – SARL – Lumina Le Havre<br />
                                <strong>Créateur</strong> : <a target="blank" href="lumina.fr">Patron Lumina</a><br />
                                <strong>Responsable publication</strong> : Secretaire Lumina – secretaire@lumina.fr<br />
                                Le responsable publication est une personne physique ou une personne morale.<br />
                                <strong>Webmaster</strong> : WebMaster – email@webmaster.com<br />
                                <strong>Hébergeur</strong> : OVH – OVH Strasbourg<br />
                                Crédits : <br />
                                Le modèle de mentions légales est offert par <a target="blank" href="https://www.subdelirium.com/">Subdelirium.com</a>
                            </p>

                            <p className={classes.title}>2. Conditions générales d’utilisation du site et des services proposés.</p>
                            <p className={classes.text}>L’utilisation du site <a href="//lumina.fr/">lumina.fr</a> implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site <a href="//lumina.fr/">lumina.fr</a> sont donc invités à les consulter de manière régulière.</p>
                            <p className={classes.text}>Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par Patron Lumina, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.</p>
                            <p className={classes.text}>Le site <a href="//lumina.fr/">lumina.fr</a> est mis à jour régulièrement par Secretaire Lumina. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.</p>
                            <p className={classes.title}>3. Description des services fournis.</p>
                            <p className={classes.text}>Le site <a href="//lumina.fr/">lumina.fr</a> a pour objet de fournir une information concernant l’ensemble des activités de la société.</p>
                            <p className={classes.text}>Patron Lumina s’efforce de fournir sur le site <a href="//lumina.fr/">lumina.fr</a> des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
                            <p className={classes.text}>Tous les informations indiquées sur le site <a href="//lumina.fr/">lumina.fr</a> sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site <a href="//lumina.fr/">lumina.fr</a> ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.</p>
                            <p className={classes.title}>4. Limitations contractuelles sur les données techniques.</p>
                            <p className={classes.text}>Le site utilise la technologie JavaScript.</p>
                            <p className={classes.text}>Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour</p>
                            <p className={classes.title}>5. Propriété intellectuelle et contrefaçons.</p>
                            <p className={classes.text}>Patron Lumina est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.</p>
                            <p className={classes.text}>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : Patron Lumina.</p>
                            <p className={classes.text}>Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
                            <p className={classes.title}>6. Limitations de responsabilité.</p>
                            <p className={classes.text}>Patron Lumina ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site lumina.fr, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>
                            <p className={classes.text}>Patron Lumina ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site <a href="//lumina.fr/">lumina.fr</a>.</p>
                            <p className={classes.text}>Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. Patron Lumina se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, Patron Lumina se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).</p>
                            <p className={classes.title}>7. Gestion des données personnelles.</p>
                            <p className={classes.text}>En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l'article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.</p>
                            <p className={classes.text}>A l'occasion de l'utilisation du site <a href="//lumina.fr/">lumina.fr</a>, peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site <a href="//lumina.fr/">lumina.fr</a>, le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.</p>
                            <p className={classes.text}> En tout état de cause Patron Lumina ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site <a href="//lumina.fr/">lumina.fr</a>. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site <a href="//lumina.fr/">lumina.fr</a> l’obligation ou non de fournir ces informations.</p>
                            <p className={classes.text}>Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.</p>
                            <p className={classes.text}>Aucune information personnelle de l'utilisateur du site <a href="//lumina.fr/">lumina.fr</a> n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de Patron Lumina et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis à vis de l'utilisateur du site <a href="//lumina.fr/">lumina.fr</a>.</p>
                            <p className={classes.text}>Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.</p>
                            <p className={classes.title}>8. Liens hypertextes et cookies.</p>
                            <p className={classes.text}>Le site <a href="//lumina.fr/">lumina.fr</a> contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de Patron Lumina. Cependant, Patron Lumina n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.</p>
                            <p className={classes.text}>La navigation sur le site <a href="//lumina.fr/">lumina.fr</a> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.</p>
                            <p className={classes.text}>Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :</p>
                            <p className={classes.text}>Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</p>
                            <p className={classes.text}>Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée.
                                Paramétrez les Règles de conservation sur :  utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour  désactiver les cookies.</p>
                            <p className={classes.text}>Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.</p>
                            <p className={classes.text}>Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur préférences.  Dans l'onglet "Confidentialité", vous pouvez bloquer les cookies.</p>

                            <p className={classes.title}>9. Droit applicable et attribution de juridiction.</p>
                            <p className={classes.text}>Tout litige en relation avec l’utilisation du site <a href="//lumina.fr/">lumina.fr</a> est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.</p>
                            <p className={classes.title}>10. Les principales lois concernées.</p>
                            <p className={classes.text}>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l'informatique, aux fichiers et aux libertés.</p>
                            <p className={classes.text}> Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique.</p>
                            <p className={classes.title}>11. Lexique.</p>
                            <p className={classes.text}>Utilisateur : Internaute se connectant, utilisant le site susnommé.</p>
                            <p className={classes.text}>Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l'identification des personnes physiques auxquelles elles s'appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</p>
                        

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Fermer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}