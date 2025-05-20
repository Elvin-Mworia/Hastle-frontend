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
import Worker from "./components/worker";
import { Button} from '@chakra-ui/react'

const fadeInAnimationCard={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: .8, duration: 0.5, ease: "easeOut" } },
};
const fadeInAnimationH2={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: .5, duration: 0.5, ease: "easeOut" } },
};
const fadeInAnimationForm={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 1.3, duration: 0.5, ease: "easeIn" } },
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
            <div className={styles.cardHolder}>
                  <motion.h2
       variants={fadeInAnimationH2}
       initial="initial"
       animate="animate">
  <Highlight query='Client or Expert' styles={{ px: '1', py: '1', bg: 'orange.100', borderRadius:'5px' }}>Join as a Client or Expert</Highlight>
  </motion.h2>
              <div className={styles.card}>
<RadioGroup onChange={setSelectedValue} value={selectedValue} className={styles.radioGroup}> 
<Button className={styles.radioButton}>
                      <Radio
                        defaultChecked 
                        colorScheme='white'
                        size="lg"
                        onChange={(e)=>{handleChange(e)
                        //setWorker(false)   
                        dispatch(updateuser({client:!client,worker:Worker}))
                        //setWorker(false)
                        }}
                          //setClient(true)
         
                        className={styles.client}
                        value="client"
                      > <h5>Hire</h5></Radio>
                      </Button>
                      <Button className={styles.radioButton}>
                       <Radio
       onChange={(e)=>{handleChange(e)
       // setWorker(true)
       // setClient(false)
        dispatch(updateuser({client:!client,worker:!worker}))  
        }}
        className={styles.worker}
        value="worker"
      
        colorScheme='black'
        size="lg"
      > <h5>Find Work</h5></Radio>
      </Button>
</RadioGroup>
                        
                     
              </div>
                  
            </div>
        </motion.div>
        <motion.div
           variants={fadeInAnimationForm}
           initial="initial"
           animate="animate"
         className='styles.cardContainer'>
        {selectedValue==="client"? <><Client/></>:<><Worker/></>}
</motion.div>
      </SimpleGrid>
      
    
    </div>)
}