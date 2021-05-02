import React, { useMemo } from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]) ; //useMemo para optimizar la carga, se dispara cuando publisher sea diferente

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}>
                    </HeroCard>
                ))
            }
        </div>
    )
}
