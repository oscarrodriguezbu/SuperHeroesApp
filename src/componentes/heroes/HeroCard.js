import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import './myStyles.css';



export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (

        <div className="card ms-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img 
                    src={heroImages( `./${id}.jpg` ).default } 
                    className="card-img" 
                    alt={superhero} />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{superhero} </h5>
                    <p className="card-text"> {alter_ego} </p>
                    {
                        (alter_ego !== characters)
                        && <p className=" card-text "> {characters} </p>
                    }
                    <p className=" card-text ">
                        <small className="text-muted">{first_appearance}</small>
                    </p>

                    <Link to={`./hero/${id}`} >
                    Más...
                    </Link>

                </div>

            </div>
        </div> 
        
    )
}

/* OPCION 1:
//ESTO SE HIZO EN LA CLASE DEL PROFE PERO EL DISEÑO LO HE PERSONALIZADO UN POCO
<div className="card ms-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{superhero} </h5>
                    <p className="card-text"> {alter_ego} </p>
                    {
                        (alter_ego !== characters)
                        && <p className=" card-text "> {characters} </p>
                    }
                    <p className=" card-text ">
                        <small className="text-muted">{first_appearance}</small>
                    </p>

                    <Link to={`./hero/${id}`} >
                    Más...
                    </Link>

                </div>

            </div>
        </div> 
        
        */

        /* OPCION 2:
        Tiene una animacion bastante buena peeerooo...
        A esto le falta la parte responsive, pues las tarjetas se montan una tras otra a no ser que que se requiera algo asi
                    pues quedaria bien porque al final, son tarjetas de superheroes xD.
        
        <Link to={`./hero/${id}`} className="my-card">
            <img src={`./assets/heroes/${id}.jpg`} className="img img-responsive " alt={superhero}/>
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>Primera aparición: <br />{first_appearance}</p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>        
        
        */