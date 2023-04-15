
import axios from 'axios';
//axios generally fetch the data froom api's by  making api's calls
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



 export const getPlacesData=async(sw,ne)=>{
    try{
        //requests
        const {data:{data}}=await axios.get(URL,{params:{
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
         tr_longitude: ne.lng,


        },
        headers: {
          'X-RapidAPI-Key': 'c920942cabmsh645f750433241dep1f91b3jsncc79c81dfdd0',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });
        return data;


    }
    catch(error){
        console.log(error)

    }
}
