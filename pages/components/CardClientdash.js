import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "next/link"

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

const card =(title,jobdescription,proposal)=> (
  <React.Fragment>
    <CardContent>
      
      <Typography variant="h5" component="div">
        {title}
      </Typography>
     
      <Typography variant="body2">
{jobdescription}
      </Typography>
    </CardContent>
    <CardActions >
      <Button size="small" sx={{color:'#F27400',fontWeight:'bold'}}><Link href="/Proposals"><a>Proposals:{proposal}</a></Link></Button>
      
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard({title,jobdescription,proposal}) {
  return (
    <Box sx={{ maxWidth:150,cardSX}}>
      <Card variant="outlined" 
      sx={{background:'#E1CECE',margin:'.3rem',borderRadius:'.5rem'}}
      >{card(title,jobdescription,proposal)}</Card>
    </Box>
  );
}
