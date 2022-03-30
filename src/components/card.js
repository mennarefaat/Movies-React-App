import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import CustomizedButtons from './Button' 


export default function ActionAreaCard({ moviesData }) {
    const baseURL = `https://image.tmdb.org/t/p/w500/${moviesData.poster_path}`
    return (
        <Card spacing={8} sx={{
            irection: "column-reverse",
            justifyContent: "center",
            alignItems: "center",
            width:350,
            height: 500,
            margin: '2%',
            display: 'inline-block',

        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="350"
                    width="300"
                    image={baseURL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {moviesData.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {moviesData.release_date}
                    </Typography>
                    <Link to={`/movie/${moviesData.id}`} style={{textDecoration:"none"}} >
                        <CustomizedButtons name="Movie Detail">
                            
                        </CustomizedButtons>
                    </Link>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}