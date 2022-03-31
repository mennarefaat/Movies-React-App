import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from "react";
import axios from 'axios';
// import Home from '.././pages/Home'


export default function ComboBox({ movies }) {
  const [movieTitle, setMovie] = useState("")

  // useEffect(() => {
  //     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=40b9cd171d9532635ec61365b799928f&query=${movieTitle}`)
  //         .then(response => {console.log(response.data.results) })
  //         .catch(error => console.log(error))

  // }, [movieTitle])

  console.log(movieTitle)

  const title = movies.map((movie) => {
    return movie.title
  })

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={title}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" onClick={() => {
          setMovie(params.inputProps.value); console.log(movieTitle)
        }} />}
      />
    </>
  );
}


