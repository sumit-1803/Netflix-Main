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

export default function Browse() {

  const user = useSelector(store=>store.app.user);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useNowPlayingMovies();

  useEffect(()=>{
    // if (!user) {
    //   navigate("/")
    // }
    
  },[]);

  return (
    <div>
      <Header></Header>
      <div>
        <MainContainer></MainContainer>
        <MovieContainer></MovieContainer>

      </div>
    </div>
  )
}
