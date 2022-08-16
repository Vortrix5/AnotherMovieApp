import React, { useState } from 'react'
import Filter from './Filter';
import MovieCard from './MovieCard';
import './MovieList.css'

const MovieList = ({movie}) => {
    const [text, settext] = useState("");
  const [rate, setrate] = useState("");
  const filterText = (txt) => {
    settext(txt);
  };
  const filterRate = (rt) => {
    setrate(rt);
  };
    return (
        <div>
                  <Filter filterText={filterText} filterRate={filterRate} />

            <div className="cards">
{movie.filter(
            (movie) =>
              movie.name.toLowerCase().includes(text.toLowerCase()) &&
              movie.rating >= rate
          ).map((el)=><MovieCard element={el}/>).reverse()}
        </div>
        </div>
    )
}

export default MovieList