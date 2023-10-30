import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../axios'
import { API_KEY,imageUrl } from '../constants';
import YouTube from 'react-youtube';

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

export default function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('');
  useEffect(()=>{

    axios.get(props.url).then((response)=>{
      // console.log(response.data.results[0]);
      setMovies(response.data.results);
    }).catch(err=>{
      console.log("API request error");
    })

  },[])

  function handleMovie(movieId){
    axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en`).then((response)=>{
        response.data.results.length? setUrlId(response.data.results[0].key) : console.log("Array Empty");
    }).catch(err=>{console.log("No video found")});
  }

  return (
    <div className='row'>
        <h1 className='title'>{props.title}</h1>
        <div className='posters'>
          {
            movies.map((movie,index)=>{
              if(movie.backdrop_path){
                return(
                  <div className='posterBox' key={index}>
                     <img loading='lazy' onClick={()=>{
                      handleMovie(movie.id);
                      }
                    }  className={props.isSmall? 'small_poster':'poster'} 
                    src={imageUrl + movie.backdrop_path} alt="poster" />
                    <h2 className='name'>{movie?.name || movie?.title}</h2>
                  </div>
                 
                );
              }
             
            })
          }            
        </div>
        {urlId && <YouTube id="vdo" videoId={urlId} opts={opts}  />}
    </div>
  )
}
