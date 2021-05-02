import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from '../componentes/ui/NavBar';

import { DcScreen } from '../componentes/dc/DcScreen';
import { HeroScreen } from '../componentes/heroes/HeroScreen';
import { MarvelScreen } from '../componentes/marvel/MarvelScreen';
import { SearchScreen } from '../componentes/search/SearchScreen';


export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>


                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/search" component={SearchScreen} />

                    <Redirect to ="/marvel" />


                </Switch>

            </div>
        </>
    )
}
