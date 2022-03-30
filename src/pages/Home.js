import Card from './../components/card'
import { useEffect, useState } from "react";
import axios from 'axios'
import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';



export default function Movies() {
    const [movies, setMovies] = useState([])
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=40b9cd171d9532635ec61365b799928f")
            .then(response => { setMovies(response.data.results); console.log(response.data.results) })
            .catch(error => console.log(error))

    }, [])

    return (
        <>
            <div>
                {movies.map((movie) => {
                    console.log(movie.title)
                    return <Card moviesData={movie} key={movie.id} ></Card>

                })}
                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </>
    )
}