import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const MovieCard = ({element}) => {
 return (
    <Card sx={{ maxWidth: 340 }}>
    <CardMedia
      component="img"
      height="150"
      image={element.posterurl}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {element.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {element.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">{element.rating}</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
 );
};
export default MovieCard