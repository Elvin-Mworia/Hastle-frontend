import styles from '../styles/signup.module.scss'
import Image from "next/image";
//import * as React from 'react';
import {useState}  from 'react';
//import Radio from '@mui/material/Radio';
import { Radio,RadioGroup} from '@chakra-ui/react'
import Link from "next/link";
import Router from "next/router"
import {useSelector,useDispatch} from "react-redux";
import {updateuser} from "../store/userReducer";
import { SimpleGrid } from '@chakra-ui/react'
import {motion} from 'framer-motion';
import { Highlight } from '@chakra-ui/react'
import Client from "./components/client";

const fadeInAnimationCard={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: .8, duration: 0.5, ease: "easeOut" } },
};

export default function Sign_Up(){
  const [selectedValue, setSelectedValue] =useState('client');
  // const [Client,setClient]=useState(true);
  // const [Worker,setWorker]=useState(false);
  const dispatch=useDispatch();
  const {client,worker}=useSelector((state)=>state.user);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  //  selectedValue==="client"?setClient(!Client):setWorker(!Worker);
   // console.log({Client,Worker});
    event.preventDefault();
  };
  const submit= (event) => {
     
      
     // dispatch(updateuser({client:Client,worker:Worker}))
      console.log({client,worker});
    selectedValue==="client"?Router.push("/signup/client"):Router.push("/signup/worker");
    event.preventDefault();
  };
    return(<div className={styles.container}>
      <SimpleGrid columns={2} spacing={10} >
        <motion.div
        variants={fadeInAnimationCard}
initial="initial"
animate="animate"
        className={styles.cardContainer}>
        <h2><Highlight query='Client or Worker' styles={{ px: '1', py: '1', bg: 'orange.100', borderRadius:'5px' }}>Join as a Client or Worker</Highlight></h2>
            <div className={styles.cardHolder}>
              <div className={styles.card}>
<RadioGroup onChange={setSelectedValue} value={selectedValue} >
<Radio
                        defaultChecked 
                        colorScheme='orange'
                        size="lg"
                        onChange={(e)=>{handleChange(e)
                        setWorker(false)   
                        dispatch(updateuser({client:!client,worker:Worker}))
                        setWorker(false)
                        }}
                          //setClient(true)
         
                        className={styles.client}
                        value="client"
                      > <h5>I&apos;m a client looking to hire a worker</h5></Radio>
                       <Radio
       onChange={(e)=>{handleChange(e)
       // setWorker(true)
        setClient(false)
        dispatch(updateuser({client:!client,worker:!worker}))  
        }}
        className={styles.worker}
        value="worker"
        colorScheme='orange'
        size="lg"
      > <h5>I&apos;m a worker looking to find work</h5></Radio>
</RadioGroup>
                        
                     
              </div>
                  
            </div>
        </motion.div>
        {selectedValue==="client"? <><Client/></>:<></>}

      </SimpleGrid>
      
    
    </div>)
}