
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
    <span>Your Dashboard</span><br/>
    <span>{name}</span><br/>
    <span>Available Tokens:{token}</span>
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
       <Image src={svg} height={200} width={200} alt="No jobs illustration" />
       <h4>No active jobs posts at the moment</h4>
       <span>Post a job and let talent come to you</span><br/>
       <Link href="/Post_Job"><a>Add Job</a></Link>
     </div>
    }
    
   

    </div>

    <div className={styles.thirdSection}>
    <h4>How to link up with a worker</h4><br/>
    <hr/>
    <h6>Steps</h6>
    <div className={styles.steps}>
    <Image className={styles.image} src={svg1} height={100} width={100} alt="Step 1 - Post a job" />
    <div className={styles.stepContent}>
    <h4>1.Post a Job in the application.
  </h4>
  <p>Provide enough detail for great workers to figure out if the  work is right for them.</p>
  <p>(You can always edit your post)</p>
    </div>
    
    </div>
    <div className={styles.steps}><Image className={styles.image} src={svg2} height={100} width={100} alt="Step 2" />
     <div className={styles.stepContent}>
      <h4>2.Get a Proposal/Request from a worker/talent.
  </h4>
  <p>A strong working relationship starts with open communication. Here&apos;s your chance to ask about experience, set expectations for what you need, and discuss terms of the work. </p>
  </div>
    
    </div>
    <div className={styles.steps}><Image className={styles.image} src={svg3} height={100} width={100} alt="Step 3" />
     <div className={styles.stepContent}>
      <h4>3.Start working Together.
  </h4>
  <p>Once you both agree on terms, collaborate with simple and secure tools like our chat system, the worker is sent the location of your task premises. Exchanging your contacts is upto you but it&apos;s encouraged for flexible communication. </p>
  </div>
    </div>
    <div className={styles.steps}><Image className={styles.image} src={svg4} height={100} width={100} alt="Step 4" />
     <div className={styles.stepContent}>
      <h4>4.Pay the worker on the agreed terms</h4>
      <p>Once the worker has finished the job and you are satisfied pay them on the agreed amount. Failure to which they have a right to report you on the plartform and be banned.</p>
     </div></div>

    </div>
    </div>

    </div>
     <div className={styles.dashboardRight}>
     <div >
      <button><Link href="/Buy_Hastles"><a>Buy Tokens</a></Link></button><br/>
     <button>Edit you Job Post</button><br/>
     <button>Completed Tasks</button></div>
   

    </div>
    </div>

    </div>
    </>)
}