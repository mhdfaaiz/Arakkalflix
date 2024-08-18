import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
function RowPost(props) {
    const [moviess, setMoviess] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data)
            setMoviess(response.data.results)
        })
    }, [props.url])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
            } else {
                console.log('array empty')
            }
        })

    }
    const handleCloseVideo = () => {
        setUrlId('');
    }
    return (
        <div className='px-4 mt-4'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {moviess.map((obj) =>
                    <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="posters" />
                )}
            </div>
            {urlId && (
                <div className='youtube-player'>
                    <YouTube opts={opts} videoId={urlId.key} />
                    <button onClick={handleCloseVideo} className='close-button'>Close Video</button>
                </div>
            )}
        </div>
    );
}

export default RowPost;
