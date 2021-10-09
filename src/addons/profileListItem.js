import React from 'react';
import { Link } from 'react-router-dom';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';

export const mainListItem = (
    <div>
        <Link to="" style={{ textDecoration: 'none' }}>
            <ListItem>
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText style={{ color: "#47A8BD" }} primary="Accueil" />
            </ListItem>
        </Link>

        <Link to="/profile" style={{ textDecoration: 'none' }}>
            <ListItem>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText style={{ color: "#47A8BD" }} primary="Tableau de Bord" />
            </ListItem>
        </Link>

        <Link to="/document" style={{ textDecoration: 'none' }}>
            <ListItem>
                <ListItemIcon>
                    <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText style={{ color: "#47A8BD" }} primary="Documents" />
            </ListItem>
        </Link>

        <Link to="/appointment" style={{ textDecoration: 'none' }}>
            <ListItem>
                <ListItemIcon>
                    <EventIcon />
                </ListItemIcon>
                <ListItemText style={{ color: "#47A8BD" }} primary="Rendez-vous" />
            </ListItem>
        </Link>

        <Link to="/settings" style={{ textDecoration: 'none' }}>
            <ListItem>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText style={{ color: "#47A8BD" }} primary="Paramètres" />
            </ListItem>
        </Link>
    </div>
);