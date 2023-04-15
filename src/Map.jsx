import React from 'react'
import GoogleMapReact from 'google-map-react';
import {Paper,Typography,useMediaQuery}  from '@mui/material';
import  LocationOnOutlinedIcon  from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/lab/Rating';
import useStyles from './MapStyles';

const Map = ({setCoordinates ,setBounds,coordinates,places,setChildClicked}) => {
  const classes=useStyles();
  const isDesktop=useMediaQuery('(min-width:600px)')    
 
 

  return (

    <div className={classes.mapContainer}>
      <GoogleMapReact bootstrapURLKeys={{key:'AIzaSyBY-Jue20J8xzCphsnOaW47TO85ofMeUac'}} 87
      defaultCenter={coordinates} 
      center={coordinates} 
      defaultZoom={14}
       margin={[50,50,50,50]} 
       options={''}
       onChange={(e)=>{
        setCoordinates({lat:e.center.lat ,lng:e.center.lng});
        setBounds({ne:e.marginBounds.ne, sw:e.marginBounds.sw});}} 
       onChildClick={(child)=>setChildClicked(child)}>
        
      { places?.map((place,i)=>(
        <div className={classes.markerContainer}
        lat={Number(place.latitude)}
        lng={Number(place.longitude)}
        key={i}>
      

              {
                !isDesktop?(<LocationOnOutlinedIcon
                  color='primary' 
                  fontSize='large'/>):
                  (<Paper elevation={3} classNmae={classes.paper}>
                    <Typography classNmae={classes.typography}
                    variant='subtitle2' gutterBottom>{place.name}
                    </Typography>
                    <img className={classes.pointer} src={place.photo?place.photo.images.large.url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1414235077428-338989a2e8c0%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&tbnid=664uaMjvl6KbiM&vet=12ahUKEwiQ99nDhan-AhW283MBHTFIDOYQMygKegUIARDqAQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frestaurant&docid=8gSFC4td7_0SrM&w=1000&h=667&q=restaurant%20website%20background%20images&hl=en&ved=2ahUKEwiQ99nDhan-AhW283MBHTFIDOYQMygKegUIARDqAQ'}
      alt={place.name}></img>
      <Rating size='small' value={Number(place.rating)} readOnly></Rating>
                  </Paper>)
              }

            </div>
          ))
        }

      </GoogleMapReact>
      
    </div>
  )
}

export default Map
