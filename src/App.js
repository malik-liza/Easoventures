import React ,{useEffect,useState}from 'react'
import './App.css';
import { CssBaseline , Grid } from '@mui/material';
import  Header from './Header'
import List from './List';
import Map from './Map';
import PlaceDetails from './PlaceDetails';
import { getPlacesData } from './api';
import { useSyncExternalStore } from 'react';


const App = () => {
  const [places,setPlaces]=useState({});
  const[filteredPlaces,setFilteredPlaces]=useState([]);

  const [coordinates,setCoordinates] =useState({});

  const [bounds,setBounds]=useState({});
  const [childClicked, setChildClicked]=useState(null);
  const[isLoading,setIsLoading]=useState(false);
  const[type,setType]=useState('retaurants');
  const[rating,setRating]=useState('');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
     setCoordinates({lat:latitude,lng:longitude});
    })
  },[]);
  useEffect(()=>{
    const filteredPlaces=places?.filter((place)=>place.rating >rating)
    setFilteredPlaces(filteredPlaces);

  },[rating]);
  
  
  useEffect(()=>{
            if(bounds.sw&&bounds.ne){
              setIsLoading(true);
            }

             getPlacesData(bounds.sw,bounds.ne).then((data)=>{
              
              setPlaces(data);
              setFilteredPlaces([]);
              setIsLoading(false);
              console.log('data',data);
             })


  },[type,bounds]);               
  {/** leaving dependencies empty means code inside the functional block wil happen only at the startt at of application */}
  return (
    <div>
      {/**designing the page layout  */}
      <CssBaseline/>
      <Header/>{/**on top header */}
     
      
      <Grid container spacing ={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
           <List isLoading={isLoading}
           places={filteredPlaces.length?filteredPlaces:places}
           childClicked={childClicked}
           type={type}
           setType={setType}
           rating={rating}
           setRating={setRating}/> 
           {/**on the left  most corner list of items  */}
        </Grid>
        <Grid className='app_grid2'item xs={12} md={4}>
          <Map setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={filteredPlaces.length?filteredPlaces:places}
          setChildClicked={setChildClicked}

          />{/**on the  right most corner displayed the map */}
        </Grid>
      </Grid>      
         
    </div>
  )
}

export default App

