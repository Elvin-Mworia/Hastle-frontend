
import styles from '../styles/signup.module.scss'
import Image from "next/image";
//import * as React from 'react';
import {useState}  from 'react';
import Radio from '@mui/material/Radio';
import Link from "next/link";
import Router from "next/router"
export default function Sign_Up(){
  const [selectedValue, setSelectedValue] =useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    event.preventDefault();
  };
  const submit= (event) => {
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
        onChange={handleChange}
        className={styles.client}
        value="client"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'Client' }}
      />
      <h5>I’m a client looking to hire a worker</h5>
            </div>
            <div className={styles.card}>
            <Radio
        checked={selectedValue === 'worker'}
        onChange={handleChange}
        className={styles.worker}
        value="worker"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'Worker' }}
      />
      <h5>I’m a worker looking to find work</h5>
            </div>
          

        </div>
        
  <button onClick={submit}>Proceed</button>
        
        <h6>Already have an account,<Link href="/Login"><a>Log in</a></Link></h6>


       </div>
       
    </div>)
}