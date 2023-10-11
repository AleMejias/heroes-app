/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";


import { useForm } from "../../hooks/useForm"
import { useMemo } from 'react';

export const SearchHeroesPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  

  const { q = '' } = useMemo( () => queryString.parse( location.search ), [location.search]);


  const { search , onInputChange } = useForm({
    search: ''
  });

  const handleFormSubmit = ( event: any ) => {

    event.preventDefault();

    if( search.trim().length <= 1 ) { return; }

    navigate(`?q=${search.toLowerCase().trim()}`)
  }


  return (
    <div className="container mt-5">

      <div className="row">

        <div className="col-5">
          <h4>Search</h4>
          <form onSubmit={ handleFormSubmit }>

            <input 
              type="text" 
              placeholder="Search a hero"
              className="form-control"
              name="search" 
              autoComplete="off"
              value={ search }
              onChange={ onInputChange } 
            />

            <button className="btn btn-outline-info mt-1">
              Search
            </button>

          </form>

        </div>

        <div className="col-7">

          <h4>Results</h4>
 
          <div className="alert alert-primary">
            Search a hero
          </div>
          <div className="alert alert-danger">
            No hero found to { q }
          </div>

        </div>

      </div>

    </div>
  )
}
