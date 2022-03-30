import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import { useEffect, useState } from "react";
// import Home from '.././pages/Home'


export default function ComboBox({movies}) {
    
  const title=movies.map((movie)=>{
      return movie.title
  })

  return (
      <>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
      </>
  );
}


