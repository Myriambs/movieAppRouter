import React, { useState } from 'react'
import AddMovie from './Component/AddMovie/AddMovie';
import MovieList from './Component/MovieDisplay/MovieList';
import SearchMovie from './Component/SearchMovie/SearchMovie';
import {moviesData} from './MovieData'
import Navbar from './Component/navbar/Navbar';
import './App.css'
import HomePage from './Component/HomePage';
import Trailer from './Component/Trailer';
//  react routerr

import {Routes,Route} from 'react-router-dom'
import Movie from './Component/Movie';




const App = () => {
const [movieList,setMovieList]=useState(moviesData);

  //ici partie rating : 
const [nameSearch,setNAmeSearch]=useState('');

  const deletovie=(ID)=>{
    setMovieList(
      movieList.filter((e)=> e.id !== ID )
    )
  }
  const MovieSeen=(ID)=>{
setMovieList(
  movieList.map((e)=> e.id === ID ? {...e,isDone : !e.isDone} : e)
)
  }
  //part add movie 
  const Addmoviehandeler=(newMovie)=>{
setMovieList(
  [...movieList,newMovie]
)
  } 
   return (
    <Routes>
   
       
    <Route path='/movie' element={<Movie    deletovie={deletovie} nameSearch={nameSearch}
    setNAmeSearch={setNAmeSearch} movieList={movieList} MovieSeen={MovieSeen}
    
    />} />

      <Route path='/add' element={<AddMovie  
       Addmoviehandeler={Addmoviehandeler}/>  } />
      
 
<Route path='/' element={  <HomePage/>  } />

<Route path='/trailer/:id' element={
<Trailer/> } />





    
    </Routes>
  )
}

export default App