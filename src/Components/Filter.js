import React, { useState, useRef } from "react";
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MovieCard from "./MovieCard";

const divFilter={
    display:'flex',
    justifyContent:'space-evenly',

}
const divCard={
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    rowGap: '50px'
}

const Filter = ({ filterText, filterRate }) => {
 return (
    <>
   <div style={divFilter}>
        <TextField id="standard-basic" label="Title" variant="standard" onChange={(e) => filterText(e.target.value)}
 />
        <Rating name="half-rating" defaultValue={2.5}  precision={0.5}  onChange={(e) => filterRate(e.target.value)}
 />

   </div>
        </>
 );
};
export default Filter

