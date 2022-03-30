import Card from './../components/card'
import { useEffect, useState } from "react";
import axios from 'axios'
import * as React from 'react';

import ComboBox from '../components/Search';



export default function Movies() {
    const [movies, setMovies] = useState([])

    const [pageNum, setPageNum] = useState(1);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?page=${pageNum}&api_key=40b9cd171d9532635ec61365b799928f`)
            .then(response => { setMovies(response.data.results); console.log(response.data.results) })
            .catch(error => console.log(error))

    }, [pageNum])

    return (
        <>
            <div>
                <ComboBox movies={movies}/>
                {movies.map((movie) => {
                    console.log(movie.title)
                    return <Card moviesData={movie} key={movie.id} ></Card>

                })}

                <ul className="pagination">
                    <li className="page-item"><button onClick={() => { pageNum > 2 ? setPageNum(pageNum - 1) : setPageNum(1) }} className="page-link">Previous</button></li>
                    <li className="page-item"><button onClick={() => { setPageNum(pageNum + 1) }} className="page-link">Next</button></li>
                </ul>
            </div>
        </>
    )
}