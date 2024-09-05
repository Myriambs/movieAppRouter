import React from 'react'
import Rate from '../Rating/Rate';
import {Link} from 'react-router-dom'
const Navbar = ({setNAmeSearch}) => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">MovieApp</div>
        <ul className="navbar-links">
          <li><a href="#home"> <Link  to={'/'}  >Home</Link></a></li>
          <li><a href="#movies"><Link  to={'/movie'} >Movies</Link></a></li>
          <li><a href="#about"><Link to={'/add'}  >add Movie</Link></a></li>
        </ul>
        <input
          type="text"
          placeholder="Type movie name to search"
   onChange={(e)=>setNAmeSearch(e.target.value)}
        />
                 {/* <Rate     rating={ratingSearch}   setRatingSearch={setRatingSearch}  /> */}

      </nav>
    );
  };

export default Navbar
