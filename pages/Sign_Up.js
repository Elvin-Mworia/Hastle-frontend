
import styles from '../styles/signup.module.scss'
import Image from "next/image";
//import * as React from 'react';
import {useState}  from 'react';
import Radio from '@mui/material/Radio';
import Link from "next/link";
import Router from "next/router"
import {useSelector,useDispatch} from "react-redux";
import {updateuser} from "../store/userReducer";

export default function Sign_Up(){
  const [selectedValue, setSelectedValue] =useState('');
  const [Client,setClient]=useState(true);
  const [Worker,setWorker]=useState(false);
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
      
       <div className={styles.cardContainer}>
        <h2>Join as a Client or Worker</h2>
        
        <div className={styles.cardHolder}>
            <div className={styles.card}>
            <Radio
        checked={selectedValue === 'client'}
        onChange={(e)=>{handleChange(e)
   //setClient(true)
   setWorker(false)   
dispatch(updateuser({client:!client,worker:Worker}))

setWorker(false)

        
        }}
        className={styles.client}
        value="client"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'Client' }}
      />
      <h5>I&apo;m a client looking to hire a worker</h5>
            </div>
            <div className={styles.card}>
            <Radio
        checked={selectedValue === 'worker'}
      onChange={(e)=>{handleChange(e)
       // setWorker(true)
        setClient(false)
        dispatch(updateuser({client:!client,worker:!worker}))

        
        }}
        className={styles.worker}
        value="worker"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'Worker' }}
      />
      <h5>I&apos;m a worker looking to find work</h5>
            </div>
          

        </div>
        
  <button onClick={submit}>Proceed</button>
        
        <h6>Already have an account,<Link href="/Login"><a>Log in</a></Link></h6>


       </div>
       
    </div>)
}