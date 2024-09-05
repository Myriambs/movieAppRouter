import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movieList,deletovie,MovieSeen,nameSearch}) => {
    console.log(movieList)
  return (
    <div  style={{display:'flex',justifyContent:"space-around",flexWrap:"wrap"}} >
        {movieList.filter((el)=> el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()))



        .map((e,i)=>(   <MovieCard  movieList={e} key={i} deletovie={deletovie} MovieSeen={MovieSeen} />))}
     
    </div>
  )
}

export default MovieList