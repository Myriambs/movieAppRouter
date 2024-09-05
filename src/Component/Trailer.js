import React from 'react'
import './Test.css'
import {Link, useParams} from 'react-router-dom'
import  {moviesData} from '../MovieData'
const Test = () => {

  const {id} =useParams()
  console.log('voici id el movie mte3ik',id)

console.log('movid data trailer',moviesData)

const foundMovie= moviesData.find((el)=> el.id === Number(id))

console.log('foundmovie =>' , foundMovie)
  return (
    <>

  <main>
    <section id="film1">
      <div className="content">
        <div className="image-prev">
          <img
            src={foundMovie.image}
            alt=""
            width={350}
          />
        </div>
        <div className="info">
          <h2 className="title">{foundMovie.name}</h2>
          <div className="tips">
            <div className="stars">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-regular fa-star" />
              <p>4 / 5</p>
            </div>
            <p className="year">{foundMovie.date}</p>
          </div>
          <p className="desc">
            Marvel's official synopsis for the movie is this: "In Marvel
            Studios' Guardians of the Galaxy Vol. 3 our beloved band of misfits
            are looking a bit different these days. Peter Quill, still reeling
            from the loss of Gamora, must rally his team around him to defend
            the universe along with protecting one of their own.
          </p>
          <div className="buttons">
            <a className="playstore-button" href="#">
              <svg
                fill="currentColor"
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="-6 -6 72.00 72.00"
                xmlSpace="preserve"
                stroke="#000000"
                strokeWidth="0.0006000000000000001"
                transform="matrix(1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.36"
                />
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30 c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15 C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" />
                    <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30 S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" />
                  </g>
                </g>
              </svg>
              <span className="texts">
                <span className="text-1"    > <Link to={'/movie'}  >Go Back</Link></span>
                <span className="text-2">Prime Video</span>
              </span>
            </a>
            <button className="save_btn">
              <svg
                fill="#ffffff"
                className="heart"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 471.701 471.701"
                xmlSpace="preserve"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z" />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
   

  </main>
</>

  )
}

export default Test
