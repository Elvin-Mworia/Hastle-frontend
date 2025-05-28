
import React from 'react';
import styles from "../styles/clientdash.module.scss";
import Link from "next/link";
import dynamic from 'next/dynamic'
import Image from "next/image";
import svg from "../public/image5.svg";
import svg1 from "../public/image6.svg";
import svg2 from "../public/image7.svg";
import svg3 from "../public/image8.svg";
import svg4 from "../public/image9.svg";
import Navbar from "./components/navbar";
import {useSelector} from "react-redux"
import {updateuserinfo} from "../store/userInfoReducer"
import { useQuery,gql } from "@apollo/client";
import { useEffect } from "react";
import axios from "axios";
import OutlinedCard from "./components/CardClientdash";
import apollo from "../utils/apolloclient"
import store from "../store/store"
import ClientStepper from "./components/step";
// import 'react-dropdown/style.css';

// const DynamicHeader = dynamic(() => import(Dropdown from 'react-dropdown'), {
//   suspense: true,
// })

 
export async function getServerSideProps(){
  try {
    // const post=gql`
    // query Posts($input:userInput!) {
    //   jobs(input:$input) {
    //     jobdescription,
    //     title,
    //     status
    //   }
    // }
    // `
    // const {data}= await apollo.query({
    //   query:post,
    //   variables:{input:{id:"636503c54c59cd655ab0db94"}}
    // });
    
    return {
      props:{data}|| []
    };
  } catch (error) {
    console.error("Error fetching jobs data:", error);
    return {
      props:{
        data: {
          jobs: []
        }
      }
    };
  }
}


export default function Client_dashboard({data}){
var postlist=[];
 console.log(data);

  const {name,token,id}=useSelector((state)=>state.userInfo)
//const {data,loading,error}=useQuery(post,{variables:{input:{id:ID}}});
//console.log(data);
useEffect(()=>{


// axios.get(`http://localhost:3005/clientpost/posts/:${ID}`).then(
// (res,err)=>{
// console.log(res.data.posts.length);
// res.data.posts.map((post)=>{
//   postlist.push(post);

// })
// console.log(postlist.length);
// //postlist=res.data.posts;

// //console.log(postlist.length);
// //console.log(postlist);

// }
// ).catch(
//   (e)=>{
//     console.error(e);
//   }
// )


},[])
  // posts({
  //   variables:{
  //     input:{
  //   id:ID
  // }
  // }})


    return(
    <>
    <div className={styles.container}>
      <Navbar/>
    <div  className={styles.dashboard}>
    <div className={styles.dashboardLeft}>

    <div className={styles.dashboardLeftwrapper}>
    <div className={styles.heading}> 
    <span>Client Dashboard:</span><br/>
    <span>{name}</span><br/>
   
    </div>

    <div className={styles.middle}>
    <h3>Your Postings</h3><br/>
    <hr/>
    {data.jobs && data.jobs.length > 0 ?
    data.jobs.map((post,key)=>{
      return(
        <React.Fragment key={key}>
        <OutlinedCard title={post.title} jobdescription={post.jobdescription}/>
        </React.Fragment>
      )
    })
    :
     <div className={styles.noJobs}>
       <Image src={svg} height={50} width={50} alt="No jobs illustration" />
       <h4>No active jobs posts at the moment</h4>
       <span>Post a job and let talent come to you</span><br/>
       <Link href="/Post_Job"><a>Add Job</a></Link>
     </div>
    }
    
   

    </div>

    
    </div>

    </div>
    <div className={styles.dashboardMiddle}>
<div className={styles.thirdSection}>
    <h4>How to link up with a worker</h4><br/>
    <hr/>
    <ClientStepper/>

    </div> 

    </div>
     <div className={styles.dashboardRight}>
       <span>Available Tokens:{token}</span>
     <div >
      
      <button><Link href="/Buy_Hastles"><a>Buy Tokens</a></Link></button><br/>
     <button>Edit you Job Post</button><br/>
     <button>Completed Tasks</button></div>
   

    </div>
    </div>

    </div>
    </>)
}