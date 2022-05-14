import Card from './../components/card'
import { useEffect, useState } from "react";
import * as React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import {setLang} from '../store/actions/langMovies'

import ComboBox from '../components/Search';
import { getMovies } from '../store/actions/pageMovie';



export default function Movies(props) {
    console.log(props)
    // const [movies, setMovies] = useState([])
  const [lang, setlang] = useState("en")


    const [pageNum, setPageNum] = useState(1);
    // useEffect(() => {
    //     axios.get(`https://api.themoviedb.org/3/movie/popular?page=${pageNum}&api_key=40b9cd171d9532635ec61365b799928f`)
    //         .then(response => { setMovies(response.data.results); console.log(response.data.results) })
    //         .catch(error => console.log(error))

    // }, [pageNum])
    const handlingLang=()=>{
        if(lang ==="en"){
          setlang ("ar")
        }else{
          setlang ("en")
        }
        console.log(lang)
      }
    //   useEffect (()=>{
    //     dispatch(setLang(lang));
    // },[lang])
    const movies = useSelector((state)=>state.pageReducer.list.results)
    const dispatch = useDispatch();
    useEffect (()=>{
        dispatch(getMovies(pageNum,lang));
    }, [pageNum,lang])
    return (
        <>
            <div>
            <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            onClick={handlingLang}
          >
            Change The Language
          </Button>
                {/* <ComboBox movies={movies}/> */}
                {movies?.map((movie) => {
                    return <Card moviesData={movie} key={movie.id} />

                })}

                <ul className="pagination">
                    <li className="page-item"><button onClick={() => { pageNum > 2 ? setPageNum(pageNum - 1) : setPageNum(1) }} className="page-link">Previous</button></li>
                    <li className="page-item"><button onClick={() => { setPageNum(pageNum + 1) }} className="page-link">Next</button></li>
                </ul>
            </div>
        </>
    )
}