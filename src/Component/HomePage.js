 import React from 'react';
import './HomePage.css';
import {useNavigate} from 'react-router-dom'
 const HomePage = () => {

  const navigate = useNavigate()
   return (
   <div className='bodyApp'>
     <div className="home-page">
       <div className="background-image">
         <div className="content-wrapper">
           <h1 className="home-title">Welcome to MovieApp</h1>
           <p className="home-subtitle">Your gateway to the world of cinema</p>
          <div className="button-container">
            <button className="btn register-btn"  onClick={()=>navigate('/movie')}  >Movies</button>
             <button className="btn login-btn">Login</button>
           </div>
        </div>
       </div>
    </div>
    </div>
   );
 };

export default HomePage;
