import React, {useState, useEffect} from 'react';
import {
    API_URL,
    API_KEY, 
    API_BASE_URL, 
    POSTER_SIZE, 
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../config';


//import components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import Spinner from './elements/Spinner';
import LoadMoreBtn from './elements/LoadMoreBtn';

//custom Hook
import {useHomeFetch} from './hooks/useHomeFetch';

const Home = () => {

    const [{state, loading, error}, fetchMovies] = useHomeFetch();
    console.log(state);

    if(error) return <div>Oops! Something's gone wrong...</div>
    if(!state.movies[0]) return <Spinner/>

    return(
        <>
        <HeroImage 
            image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
            title = {state.heroImage.original_title}
            text = {state.heroImage.overview}
        />
        <SearchBar />
        <Grid />
        <MovieThumb />
        <Spinner />
        <LoadMoreBtn />
    </>
    )

}
    

export default Home;