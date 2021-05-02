import React, { useContext } from "react";
/* para subir la app a github y mostrarla en su servidor, no se renderizan las imagenes y aparecen varios archivos con
codigo 404. Por eso se ha cambiado el BrowserRouter por HashRouter, sin embargo las imagenes en  mostrar más, no aparecen*/
import {
    /* BrowserRouter as Router, */
    /* BrowserRouter, */
    HashRouter as Router,
   /*  HashRouter, */
    Switch,
   
} from "react-router-dom";

import { AutenticarContext } from "../autenticar/AutenticarContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { LoginScreen } from "../componentes/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";




export const AppRouter = () => {

    const {user} = useContext(AutenticarContext);
    /* console.log(user); */

    return (
        <Router>
            <div>

                <Switch>

                <PublicRoute 
                exact path="/login" 
                component={LoginScreen}
                isAuthenticated={user.logged}
                />
                
                <PrivateRoute  
                path="/" 
                component={DashBoardRoutes}
                isAuthenticated={user.logged} />

                </Switch>
               

                

            </div>
        </Router>
    );
}


