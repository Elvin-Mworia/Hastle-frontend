import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "next/link"
import Cardelem from "./cardelem";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const cardSX = {
  "&:hover": {
    borderColor: "#F27400",
  },
};

// const card =(title,jobdescription)=> (
//   <React.Fragment>
//     <CardContent>
      
//       <Typography variant="h5" component="div">
//     {title}
//       </Typography>
     
//       <Typography variant="body2">
//       {jobdescription}
    
//       </Typography>
//     </CardContent>
//     <CardActions >
//       <Button size="small" sx={{color:'#F27400',fontWeight:'bold'}}><Link href="/Apply"><a>Apply</a></Link></Button>
//       <Button size="small" sx={{color:'#000000',fontWeight:'bold'}}>Save</Button>

//     </CardActions>
//   </React.Fragment>
// );

export default function OutlinedCard({title,jobdescription,id }) {
  return (
    <Box sx={{ minWidth: 275,cardSX}}>
      <Card variant="outlined" 
      sx={{background:'#E1CECE',margin:'.3rem',borderRadius:'.5rem'}}
      ><Cardelem title={title} jobdescription={jobdescription} id={id}/></Card>
    </Box>
  );
}
