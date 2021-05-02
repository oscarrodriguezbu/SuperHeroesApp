import React, { useEffect, useReducer } from 'react';
import { AutenticarContext } from './autenticar/AutenticarContext';
import { autenticarReducer } from './autenticar/autenticarReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}



export const HeroesApp = () => {
    // con esto se tiene la habilidad de obtener el usuario en cualquier parte de la aplicacion, porque está en casi el nivel mas alto de la aplicación
    const [user, dispatch] = useReducer(autenticarReducer, {}, init);

    //para mantener al usuario logeado
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
        <div>
            <AutenticarContext.Provider value={{ user, dispatch }}>
                <AppRouter />
            </AutenticarContext.Provider>
        </div>
    )
}
