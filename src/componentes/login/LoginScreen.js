import React, { useContext } from 'react';
import { AutenticarContext } from '../../autenticar/AutenticarContext';
import { types } from '../../types/types';


export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AutenticarContext);

    const handleLogin = ()=> {
        //history.push('/'); //vuelve hacia atrás pero en modo incognito puede ser un problema
       // history.replace('/');

       const lastPath = localStorage.getItem('lastPath') || '/';
      
       dispatch({
           type:types.login,
           payload: {
               name: 'Oscar'
           }

       })
        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">

            <h1>Login</h1>
            <hr />

            <button
            className="btn btn-primary"
            onClick={handleLogin}
            >
            Login
            </button>
            
        </div>
    )
}
