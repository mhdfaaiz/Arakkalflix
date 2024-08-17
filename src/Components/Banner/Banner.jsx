import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants';
import axios from '../../axios'
import './Banner.css';
function Banner() {
    const [movie, setMovie] = useState();
    const [index, setIndex] = useState(0);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data.results[0])
            setMovies(response.data.results);
            setMovie(response.data.results[0])
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % movies.length;
                setMovie(movies[nextIndex]);
                return nextIndex;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [movies]);
    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }} className='banner'>
            <div className="bg-gradient">
                <div className='content'>
                    <h1 className='title'>{movie ? movie.title : ""}</h1>
                    <div className='banner_buttons'>
                        <button className='button'>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    <h1 className='description'>{movie ? movie.overview : ""}</h1>
                </div>
                <div className="fade_bottom"></div>
            </div>
        </div>
    )
}

export default Banner
