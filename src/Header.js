import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography,InputBase,Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './Header.css';



const Header = ({setCoordinates}) => {
  const[autocomplete,setAutocomplete]=useState(null);
  const onLoad=(autoC)=>setAutocomplete(autoC);
  const onPlaceChanged=()=>{
    const lat=autocomplete.getPlace().geometry.location.lat();
    const lng=autocomplete.getPlace().geometry.location.lng();
    setCoordinates({lat,lng});

  }
    

  return (
    <div className='header__container'>
      
     <AppBar position="static">
        <Toolbar className='header__toolbar'>
            
                <h2>EasoVentures-Make your adventure easy</h2>                                {/**typography is basically the headings yocan change the title subtitiles etc */}
            
            <Box display='flex'>
            <h3>  Explore places nearby</h3>
              
           
            <Autocomplete onLoad={onLoad}onPlaceChanged={onPlaceChanged}>
                <div className='header__search'>
                    <div className='header__searchIcon'>
                        <SearchIcon/>

                    </div>
                    <input className='header__input' type='text' placeholder='Search.' />
                    {/**classes take object as an input theerefore we use  double curly braces */}

                </div>
            </Autocomplete>


            </Box>
        </Toolbar>

     </AppBar>
    </div>
  )
}

export default Header
