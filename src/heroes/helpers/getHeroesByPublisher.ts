import { heroes } from "../data/heroes";

const validPublishers = ['DC Comics','Marvel Comics'];

export const getHeroesByPublisher = ( publisher: string ) => {

    if( !validPublishers.includes( publisher ) ) {

        throw new Error(`${ publisher } is not a valid publisher`);

    }

    return heroes.filter(( heroe ) => heroe.publisher === publisher);

};