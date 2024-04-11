import React, { useEffect } from 'react'
import Header from './Header'
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import axios from "axios";
import { Now_Playing_Movie } from '../utils/constant';
import { options } from '../utils/constant';
import {useDispatch} from "react-redux";
import { getNowPlayingMovies } from '../redux/movieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';

export default function Browse() {

  const user = useSelector(store=>store.app.user);
  const toggle = useSelector(store=>store.movie.toggle);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(()=>{
    if (!user) {
      navigate("/")
    }
    
  },[]);

  return (
    <div>
      <Header></Header>
      <div>
        {
          toggle ? <SearchMovie></SearchMovie> : <>
          <MainContainer></MainContainer>
        <MovieContainer></MovieContainer></> 
        }
        

      </div>
    </div>
  )
}
