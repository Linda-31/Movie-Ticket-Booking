import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
function Theatres(){
    
    const [video, setVideo] = useState("inception");
    const [videoURL, setVideoURL] =
        useState("https://youtu.be/sa9l-dTv9Gk");
    function handleSearch() {
        movieTrailer(video).then((res) => {
            setVideoURL(res);
        });
    }

    return <div className='box'>
        <br></br><br></br>
        <h2 style={{color:"blue"}}>Theatres in Marthandam</h2>
        <br></br><h5>Lakshmi Theatre Dolby Atmos, Kuzhithurai</h5>
        <br></br><h5>Anand Cinemas, Marthandam</h5>
        <br></br><h5>SRI Murugan Cinemas , Panachamoodu</h5>     
        <div className="trailer" >
        <h2 style={{color:"blue"}}>Movie Trailer </h2>
            <div className="trailer-search">
                <label>
                Search the Movie Trailer Here:{" "}
                </label>
                <input type="text" onChange=
                    {(e) => { setVideo(e.target.value) }} />

                <button className='tb' onClick={() => { handleSearch() }}>
                    Search
                </button>
            </div>
            <ReactPlayer url={videoURL} controls={true} />
        </div>
    </div>
}
export default Theatres;

