import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function FolderList({content}) {
  return (
    <List sx={{ width: '100%', maxWidth: '8rem',height:'3rem', bgcolor: '#F27400',display:'flex',borderRadius:'.5rem',padding:'auto' }}>
      <ListItem>
       
        <ListItemText primary={content} />
      </ListItem>
      
    </List>
  );
}
