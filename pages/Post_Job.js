import styles from '../styles/postjob.module.scss'
import Link from "next/link";
import {useState}  from 'react';
import Radio from '@mui/material/Radio';


import Router from "next/router"


export default function Post_Job(){
    
     const [selectedValue, setSelectedValue] =useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    event.preventDefault();
  };
  const submit= (event) => {


    event.preventDefault();
  };
    return(<div className={styles.container}>
      
       <div className={styles.cardContainer}>
       <div className={styles.wrapper}>
        <h2>Getting Started</h2>
        <hr></hr>
        
        <div className={styles.cardHolder}>
              <span> <input type="radio" name="jobtype" value="New"/> Create a new job</span> 
      <div className={styles.cardInner}>
            <div className={styles.card}>
            <Radio
        checked={selectedValue === 'client'}
        onChange={handleChange}
        className={styles.client}
        value="client"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'Client' }}
      />
      <h5>Long Term Work</h5>
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
      <h5>Short Term or Part Time work/Quick fix</h5>
            </div>
          </div>
         <span><input type="radio" name="jobtype" value="Existing"/> Existing </span> 

        </div>
        
  <button onClick={submit}><Link href="/Job"><a>Proceed</a></Link></button>
        
        </div>


       </div>
       
    </div>
    )
}