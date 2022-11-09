import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "next/link"
import {postId} from "../../store/postId"
import { useDispatch } from 'react-redux';


export default function Cardelem({title,jobdescription,id}){
    const dispatch=useDispatch();
    return(
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
      <Button size="small" sx={{color:'#F27400',fontWeight:'bold'}}><Link href="/Apply"><a onClick={()=>{dispatch(postId({id:id}))}}>Apply</a></Link></Button>
      <Button size="small" sx={{color:'#000000',fontWeight:'bold'}}>Save</Button>

    </CardActions>
  </React.Fragment>
);
}