import React, { useMemo } from 'react';
import queryString from 'query-string'; //para sacar el query de la direccion http osea el valor de q
import { useLocation } from 'react-router';

import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    //console.log(location); 
    // console.log(queryString.parse(location.search));
    // const { q = '' } = queryString.parse(location.search); //se puede usar useMemo para no recalcular ciertos valores como location.search
    const { q = '' } = useMemo(() => queryString.parse(location.search), [location.search]); //he implementado el useMemo para optimizar
    console.log(q);



    const initialForm = {
        searchText: q
    }


    const [formValues, handleInputChange, reset] = useForm(initialForm);


    const { searchText } = formValues;
    //const heroesFiltered = heroes;

    //const heroesFiltered = getHeroByName(searchText); 
    const heroesFiltered = useMemo(() => getHeroByName(q), [q]); //si no quiero que se cargue algo sin oprimir el boton search


    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
        history.push(`?q=${searchText}`); //con esto lo que ponemos en el inpu se agrega a la direccion http de la pagina

    }


    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>

                    </form>

                </div>

                <div className="col-7">
                    <h4>Results </h4>
                    <hr />

                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no hero with {q}
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))

                    }

                </div>
            </div>

        </div>
    )
}
