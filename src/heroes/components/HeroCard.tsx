import { Link } from "react-router-dom";
import { Hero } from "../index"


const CharactersByHero = ( { alter_ego , characters }: Hero ) => {

    if( alter_ego === characters ) return ( <></> );

    return <p>{ characters }</p>;

};

export const HeroCard = ( hero: Hero ) => {

    const { id ,superhero ,alter_ego ,first_appearance } = hero;

    const imageUrl = `assets/heroes/${ id }.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">

            <div className="card">

                <div className="row no-gutters">

                    <div className="col-4">

                        <img src={ imageUrl } className="card-img" alt={ superhero } />

                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>

                            <CharactersByHero { ...hero } />

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={ `/heroe/${id}` }>
                                Más...
                            </Link>

                        </div>

                    </div>
                    
                </div> 

            </div>

        </div>
    )
}
