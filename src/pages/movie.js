
import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';





export default function OneMovie(){
    const [movie, setMovie] = useState({})
    const params = useParams();
    const id= params.id
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=40b9cd171d9532635ec61365b799928f`)
        .then(response =>{setMovie(response.data) ; console.log(response.data)})
        .catch(error => console.log(error))
        console.log(id)
        
    },[])
    const baseURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return(
        <Card spacing={8} sx={{
            irection: "column-reverse",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 500,
            height: 700,
            margin: '2%',
            display: 'inline-block',

        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="500"
                    image={baseURL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.overview}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {movie.tagline}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )


}