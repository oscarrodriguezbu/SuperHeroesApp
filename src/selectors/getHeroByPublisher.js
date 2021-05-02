import { heroes } from "../data/heroes";


export const getHeroByPublisher = (publisher) => {
    
    const ValidPublishers = ['DC Comics', 'Marvel Comics'];

    if (!ValidPublishers.includes(publisher)) {
        throw new Error(`Publisher ${publisher} no se ha encontrado`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}
