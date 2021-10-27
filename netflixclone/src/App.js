import React, {useEffect, useState} from "react";
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from "./components/MovieRow";

/*https://youtu.be/tBweoUiMsDg?t=4234  */
/* pausado em 1:10:34 */

export default () => {

  const [movieList, setMovieList] = useState([]);


  useEffect(() =>{
    const loadAll = async() =>{
      //Pegando a lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
    
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) =>(
          <div>
            <MovieRow key={key} title={item.title} items={item.items} />
          </div>    
        ))}
      </section> 
    </div>
  );
}
