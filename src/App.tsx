import React from 'react';
import routes from "./routes/routes";
import SubRoute from "./routes/SubRoute";
import './App.css';
import {BrowserRouter, Switch} from "react-router-dom";
import {Box, Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        //backgroundColor: theme.palette.primary.main,
        //color: theme.palette.primary.contrastText,
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        width: '100%',
    },
    navbar: {
        padding: theme.spacing(3),
    },
    itemLink: {
        textDecoration: 'none'
    },
    active: {
        color: theme.palette.primary.contrastText,
    }
}))

function App() {
    const classes = useStyles();

  return (
    <Box className={classes.root}>
        <Container>
            <BrowserRouter>
                <Switch>
                    {
                        routes.map((route, i) => (<SubRoute key={i} {...route}/>))
                    }
                </Switch>
        </BrowserRouter>
        </Container>
    </Box>
  );
}

export default App;
