import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../axios';
import {imageUrl,trendingUrl} from '../constants';


export default function Banner() {
  const [movie, setMovie] = useState();
  useEffect(()=>{
    axios.get(trendingUrl).then((response)=>{
      let index = Math.floor(Math.random()*10)
      console.log(response.data.results[index])
      setMovie(response.data.results[index])
    }).catch(err=>console.log("Banner data not loaded"))
  },[])

  return (
    <div className='banner' style={{backgroundImage: `url(${imageUrl}/${movie?.backdrop_path})`}}>
      <div className='content'>
        <h1 className='title'>{movie?.title}</h1>
        <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='description'>{movie?.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}
