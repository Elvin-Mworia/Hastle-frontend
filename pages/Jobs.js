import styles from "../styles/jobsworker.module.scss"
import {useState} from "react";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import OutlinedCard from "./components/Card";
import ResponsiveAppBar from "./components/appbar";


export default function Jobs(){
const[content,setContent]=useState("");

const handleChange=(e)=>{
    setContent(e.target.value);
    e.preventDefault();

}
    return(<div className={styles.container}>
    <input className={styles.searchbar} type="text" placeholder="search job.." onChange={handleChange}/>
    <div className={styles.bodyContainer}>
<div className={styles.contentHolder}>
{/* <div className={styles.header}>  */}
<ResponsiveAppBar className={styles.header}/> 
{/* </div> */}
<div className={styles.jobs}>
<OutlinedCard className={styles.card}/>
<OutlinedCard className={styles.card}/>
<OutlinedCard className={styles.card}/>
<OutlinedCard className={styles.card}/>
<OutlinedCard className={styles.card}/>

</div>
</div>
<aside className={styles.workerDetails}>
<div className={styles.workerinfo}>
 <Stack direction="row" >
      <Avatar alt="Remy Sharp" src="" />
      

    </Stack>

<h5>Elvin Mworia</h5>{/* comes from the server     */}
    {/* fetch token balance from server */}
    <span>Available token:60</span>
</div>
<div className={styles.workerjobs}>
<h5>My Job Categories</h5>
{/* to be fetched from the server */}
<span>Labour Work</span>
<span>Plumbing</span>
<span>Capentry</span>



</div>
<div className={styles.workerjobs}>
<h5>My Proposals</h5>
{/* to be fetched from the server */}
<span>2 Proposals submitted</span>




</div>

</aside>

    
    
    </div>
    </div>)
}