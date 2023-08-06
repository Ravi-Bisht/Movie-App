import React, { useEffect, useState } from "react";
import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../components/movielist/MovieList";

const Home = () => {

    const [popularMovies , setPopularMovies] = useState([]);

    const url = "https://api.themoviedb.org/3/movie/popular?api_key=692084b29c41287eb25be1a44225170d&language=en-US"

    useEffect(() => {

    async function getData(){
        const { data } = await axios.get(url);

        // console.log(data);

        setPopularMovies(data.results);
    }
    getData();
    
    }, []);

    console.log(popularMovies)
  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
           {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} key={movie.id}>
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="poster" />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
        </Carousel>
      </div>

      <MovieList/>
    </>
  );
};

export default Home;
