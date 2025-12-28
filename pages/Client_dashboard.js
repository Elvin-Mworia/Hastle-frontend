
import React from 'react';
import styles from "../styles/clientdash.module.scss";
import Link from "next/link";
import dynamic from 'next/dynamic'
import Image from "next/image";
import svg from "../public/image5.svg";
import Navbar from "./components/navbar";
import {useSelector} from "react-redux"
import { useEffect } from "react";
import axios from "axios";
import OutlinedCard from "./components/CardClientdash";
import store from "../store/store"
import ClientStepper from "./components/step";
import { Button} from '@chakra-ui/react';
import {motion} from 'framer-motion';
// import 'react-dropdown/style.css';

// const DynamicHeader = dynamic(() => import(Dropdown from 'react-dropdown'), {
//   suspense: true,
// })
const fadeInAnimationLeft = {
    initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: .8, duration: 0.5, ease: "easeOut" } },
}
const fadeInAnimationMiddle = {
    initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.5, ease: "easeInOut" } },
}
const fadeInAnimationRight = {
    initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 1.3, duration: 0.5, ease: "easeInOut" } },
}

 
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
    <motion.div 
    variants={fadeInAnimationLeft}
initial="initial"
animate="animate"
    className={styles.dashboardLeft}>

    <div className={styles.dashboardLeftwrapper}>
    <div className={styles.heading}> 
    <span>Client Dashboard:</span><br/>
    <span>{name}</span><br/>
   
    </div>

    <div className={styles.middle}>

 
    {data.jobs && data.jobs.length > 0 ?
    data.jobs.map((post,key)=>{
      return(
        <React.Fragment key={key}>
        <OutlinedCard title={post.title} jobdescription={post.jobdescription}/>
        </React.Fragment>
      )
    })
    :
     <div className={styles.middle}>
       <Image src={svg} height={50} width={50} alt="No jobs illustration" />
      
      <Button><Link href="/Job"><a>Post Work</a></Link></Button> 
     </div>
    }
    </div>
    <div className={styles.bottom}>
      <span><h1>Active/Past Works</h1></span><hr/>
      <br/>
 {data.jobs && data.jobs.length > 0 ?
    data.jobs.map((post,key)=>{
      return(
        <React.Fragment key={key}>
        <OutlinedCard title={post.title} jobdescription={post.jobdescription}/>
        </React.Fragment>
      )
    })
    :
       <p>No active/past work posts at the moment,
        <br/>post work</p>
    }
    </div>   
          </div>
                 </motion.div>
    <motion.div
        variants={fadeInAnimationMiddle}
initial="initial"
animate="animate"
     className={styles.dashboardMiddle}>
<div className={styles.thirdSection}>
    <h4>How to link up with a worker</h4><br/>
    <hr/>
    <ClientStepper/>

    </div> 

    </motion.div>
     <motion.div 
         variants={fadeInAnimationRight}
initial="initial"
animate="animate"className={styles.dashboardRight}>
       <span>Available Tokens:{token}</span>
     <div className={styles.rightWrapper}>
      
      <Button><Link href="/Buy_Hastles"><a>Buy Tokens</a></Link></Button><br/>
     <Button>Edit you Job Post</Button><br/>
     <Button>Completed Tasks</Button></div>
   

    </motion.div>
    </div>

    </div>
    </>)
}