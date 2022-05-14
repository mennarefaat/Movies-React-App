import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

import { setReducer } from ".././store/actions/reduce";

export default function Favourite() {
  const fav = useSelector((state) => state.favourite.currentMovie);
  const dispatch = useDispatch();

  const removeFavourite = (mov) => {
    dispatch(setReducer(mov));
  };

  return (
    <>
      <div>
        {fav.map((mov, index) => {
          const baseURL = `https://image.tmdb.org/t/p/w500/${mov.poster_path}`;
          return (
            <Card
              spacing={8}
              sx={{
                irection: "column-reverse",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: 345,
                height: 700,
                margin: "2%",
                display: "inline-block",
              }}
            >
              <CardActionArea>
                <CardMedia component="img" height="400" image={baseURL} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {mov.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {mov.overview}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {mov.tagline}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button
                onClick={() => {
                  removeFavourite(mov);
                }}
              >
                Delete
              </Button>
            </Card>
          );
        })}
      </div>
    </>
  );
}
