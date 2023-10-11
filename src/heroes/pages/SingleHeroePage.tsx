import { Navigate , useNavigate, useParams } from "react-router-dom"
import { useMemo } from "react";
import { getHeroById } from "../index";


export const SingleHeroePage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( id || "") , [ id ] );

  const imageUrl = `/assets/heroes/${ id }.jpg`;

  const onReturn = () => {

    const url = ( hero?.publisher.includes('Marvel')  ? '/marvel' : '/dc');

    navigate(url);

  };

  if( !hero ){

    return <Navigate to="/marvel" />

  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      
      <div className="col-4">

        <img src={ imageUrl } alt={ hero.superhero } className="img-thumbnail"/>

      </div>

      <div className="col-8">

        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego } </li>
          <li className="list-group-item"><b>Publisher:</b> { hero.publisher } </li>
          <li className="list-group-item"><b>First Appearance:</b> { hero.first_appearance } </li>
        </ul>

        <h5 className="mt-3 ">Characters</h5>
        <p>{ hero.characters }</p>

        <button 
          className="btn btn-outline-info"
          onClick={ onReturn }
          >
          Return
        </button>

      </div>

    </div>
  )
}
