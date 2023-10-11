import { getHeroesByPublisher } from "../index"

import { HeroPublisher } from '../index';
import { HeroCard } from "../index";
import { useMemo } from 'react';

export const HeroList = ({publisher}: HeroPublisher) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ] );

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                { 
                    heroes.map(( hero ) => 
                        <HeroCard 
                            key={hero.id} 
                            {...hero} />
                    ) 
                }
            </div>
        
        </>
  )
}
