import React ,{useState}from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem,FormControl,Select, Card } from '@mui/material'
import './list.css'
import {createRef} from 'react';
import PlaceDetails from './PlaceDetails';
import { useEffect } from 'react';
const List = ({places,childClicked, isLoading,type,setType,rating,setRating}) => {

   const [elementRef,setElementRef]=useState([]);
   useEffect(()=>{
    const refs=Array(places?.length).fill().map((_,i)=>elementRef[i]||createRef());
    setElementRef(refs);
   },[places])
  

   return (
    <div className='list__container'>
      <Typography variant='h4'>RESTRAUNTS,HOTELS AND ATTRACTIONS NEARBY </Typography>
      {isLoading?(<div className='loading'>
        <CircularProgress size='5rem'></CircularProgress>
      </div>):
      <>
      <FormControl fullWidth className='list__formControl'>
        <InputLabel className='list__type'>Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>{/**e is the eevent and ther is a callback func.that set the value */}
          <MenuItem value='restaurants'>RESTRAUNTS</MenuItem>
          <MenuItem value='hotels'>HOTELS</MenuItem>
          <MenuItem value='attractions'>ATTRACTIONS</MenuItem>
        </Select>

      </FormControl>
      <FormControl fullWidth className='list__formControl'>
        <InputLabel className='list__type'>Rating</InputLabel>
        <Select className='select'value={rating} onChange={(e)=>setType(e.target.value)}>
        {/**e is the eevent and ther is a callback func.that set the value */}
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>above 4.0</MenuItem>

        </Select>

      </FormControl>

      <Grid container spacing={3} className='list__places'>
       {console.log(places)}
      </Grid>
      </>}


     
      
    </div>
  )
}

export default List
