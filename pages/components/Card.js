import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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

const card = (
  <React.Fragment>
    <CardContent>
      
      <Typography variant="h5" component="div">
        Lorem ipsum dolor sit amet
      </Typography>
     
      <Typography variant="body2">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, convallis vel, pellentesque ornare. Lacus, nunc vulputate mattis imperdiet lacus risus congue scelerisque eget. Fusce neque cum tincidunt tortor neque nullam pulvinar quam. Ut id massa et vel tellus risus sed lacus. Curabitur eu consectetur tortor amet tincidunt sed quis. 
    
      </Typography>
    </CardContent>
    <CardActions >
      <Button size="small" sx={{color:'#F27400',fontWeight:'bold'}}>Apply</Button>
      <Button size="small" sx={{color:'#000000',fontWeight:'bold'}}>Save</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275,cardSX}}>
      <Card variant="outlined" 
      sx={{background:'#E1CECE',margin:'.3rem',borderRadius:'.5rem'}}
      >{card}</Card>
    </Box>
  );
}
