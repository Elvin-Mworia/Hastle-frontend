import styles from "../styles/jobsworker.module.scss"
import {useState} from "react";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import OutlinedCard from "./components/Card";
import ResponsiveAppBar from "./components/appbar";
import Navbar from "./components/navbar";
import apollo from "./components/apolloclient.js"
import {gql} from "@apollo/client"
import {useSelector} from "react-redux"


export  async function getStaticProps(){
    const {data}= await apollo.query({
        query:gql`
        query Posts{
            posts{
                jobdescription,
  scope,
  title,
  amount,
 id,
  numofworkers
            }
        }
        `
    });
    //console.log(data);
       
        return {
            props:{jobs:data.posts},
            revalidate:10,
        }
        
        
      

}

export default function Jobs({jobs}){
const[content,setContent]=useState("");
 const {name,token,id}=useSelector((state)=>state.userInfo)
console.log(jobs)
const handleChange=(e)=>{
    setContent(e.target.value);
    e.preventDefault();

}
    return(
    <>
    <Navbar/>
    <div className={styles.container}>
    <input className={styles.searchbar} type="text" placeholder="search job.." onChange={handleChange}/>
    <div className={styles.bodyContainer}>
<div className={styles.contentHolder}>
{/* <div className={styles.header}>  */}
<ResponsiveAppBar className={styles.header}/> 
{/* </div> */}
<div className={styles.jobs}>
{jobs.map((job,key)=>{
    return(
    <>
  
   <OutlinedCard className={styles.card}  title={job.title}  jobdescription={job.jobdescription} id={job.id}/>
    </>
    )
})}



</div>
</div>
<aside className={styles.workerDetails}>
<div className={styles.workerinfo}>
 <Stack direction="row" >
      <Avatar alt="Remy Sharp" src="" />
      

    </Stack>

<h5>{name}</h5>{/* comes from the server     */}
    {/* fetch token balance from server */}
    <span>Available token:{token}</span>
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
    </div>
    </>
    )
}