import React from 'react'
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from '@mui/material'
import  LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon  from '@mui/icons-material/Phone';
import  Rating  from '@mui/lab/Rating';

import useStyles from './PlaceDetailsStyles';
const PlaceDetails = ({place}) => {
  const classes=useStyles();
  return(
    <Card elevation={6}>
      <CardMedia style={{height :350}}images={place.photo?place.photo.images.large.url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1414235077428-338989a2e8c0%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%253D%26w%3D1000%26q%3D80&tbnid=664uaMjvl6KbiM&vet=12ahUKEwiQ99nDhan-AhW283MBHTFIDOYQMygKegUIARDqAQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frestaurant&docid=8gSFC4td7_0SrM&w=1000&h=667&q=restaurant%20website%20background%20images&hl=en&ved=2ahUKEwiQ99nDhan-AhW283MBHTFIDOYQMygKegUIARDqAQ'}
      title={place.name}></CardMedia>
      <CardContent>
             <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box display='flex' justifyContent='space-between'>
                  <Typography  variant='subtitle1'>Price</Typography>
                  <Typography  variant='subtitle1'>{place.price_level}</Typography>
                </Box>

                <Box display='flex' justifyContent='space-between'>
                  <Typography  variant='subtitle1'>Rating</Typography>
                  <Rating value={Number(place.rating)} readOnly></Rating>
                </Box>




                <Box display='flex' justifyContent='space-between'>
                  <Typography  variant='subtitle1'>Ranking</Typography>
                  <Typography  variant='subtitle1'>{place.ranking}</Typography>
                </Box>


                {place?.awards?.map((award)=>(
                  <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
                    <img src={award.images.small} alt={award.display_name}></img>
                    <Typography variant='subtitle2' color='textSecandory'/>

                  </Box>
                ))}
                {place?.cuisine?.map(({name})=>(
                  <Chip  key={name} size='small'label={name}className={classes.chip}></Chip>

                ))}
                {place?.address &&(
                  <Typography gutterBottom variant='body2' color='textSecandory' className={classes.subtitle}>
                    <LocationOnIcon/>{place.address}
                  
                  
                  </Typography>
                )}

                {place?.Phone &&(
                  <Typography gutterBottom variant='body2' color='textSecandory' className={classes.spacing}>
                    <PhoneIcon/>{place.phone}
                  
                  
                  </Typography>
                )}
                <CardActions>
                  <Button size='small' color='primary'
                  onClick={()=>window.open(place.website,'_blank')}>
                    Trip Advisor</Button>
                    <Button size='small' color='primary'
                  onClick={()=>window.open(place.website,'_blank')}>
                    Website</Button>


                </CardActions>

                
                
      
        </CardContent>n
    </Card>
  )

    
}

export default PlaceDetails
