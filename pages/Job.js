import styles from "../styles/clientjob.module.scss";
import svg from "../public/location.svg";
import svg1 from "../public/locationicon.svg";
import Radio from '@mui/material/Radio';
import {useState}  from 'react';
import Select from "react-select";

import Image from "next/image";

 
export default function  Job(){
  const [selectedValue, setSelectedValue] =useState('');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    event.preventDefault();
  };
  const options=[{value:"Plumbing",label:"Plumbing"},
  {value:"Welding",label:"Welding"},
  {value:"Labour",label:"Labour/Kazi ya mkono"},
  {value:"Capentry",label:"Capentry/Woodwork"},
  {value:"Electricals",label:"Wiring/Electricals"},
  {value:"Construction",label:"Construction"},
  {value:"Cleaning",label:"Cleaning"}
  
  ]
  const submit=(e)=>{
    e.preventDefault();
  }
    return(<div className={styles.container}>

    <div className={styles.jobWrapper}> 
   
    <div className={styles.card}>
    <h3><span>1.</span>Title</h3> 
    <div className={styles.content}>
    <h3>Let&apos;s start with a strong title</h3>
   
    <p>This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count,Eg:-</p>
    <div className={styles.indent}>
    <ul>
    <li> <p>Plumber needed for installing water./Fundi wa maji anaitajika.</p></li>
    <li><p>Labourer needed for carrying stones in construction site/Watu wa mkono  wanaitajika kubeba mawe na kukoroga.</p></li>
    </ul>
   

   </div>
   <input type="text" />
    </div>
    </div>

   
    <div className={styles.card}>
   <h3><span>2.</span>Location <Image src={svg} height="" width="" alt=""></Image></h3> 
    <div className={styles.content}>
    <h3>Add the pin point of prospective job premises</h3>
    <p>(This helps your accepted workers with direction to the job&apos;s site)</p>
    <Image src={svg1} height="" width="" alt=" " onClick={()=>alert("clicked")} style={{cursor:"pointer"}}></Image>
  
    </div>

    </div>
  
    
    
    <div className={styles.card}>
    <h3><span>3.</span>Category </h3>
    
    
    <div className={styles.content}>
    <h3>Choose the category of job it belongs to make it reach the right audience.</h3>
     {/* <select 
            size="10" multiple>
      <option value='blue'>Plumbing</option>
      <option value='green'>Wiring and Electricals</option>
      <option value='red'>Wood work</option>
      <option value='yellow'>Welding </option>
      <option value='orange'>Construction</option>
      <option value='orange'>Cleaning</option>
    </select> */}
  <Select options={options} onChange={handleChange} className={styles.select} isMulti/>
    </div>
   
 </div>
    <div className={styles.card}>
    <h3><span>4.</span>Scope</h3> 
       <div className={styles.content}>
           <span><Radio
        checked={selectedValue === 'Small'}
        onChange={handleChange}
       
        value="Small"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'Small' }}
      /> Small </span>  
           <span><Radio
        checked={selectedValue === 'Medium'}
        onChange={handleChange}
      
        value="Medium"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'Medium' }}
      /> Medium</span> 
      <span>  <Radio
        checked={selectedValue === 'Large'}
        onChange={handleChange}
        
        value="Medium"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'Large' }}
      />Large</span>
      
       
       </div>
    
    </div>
  
  <div className={styles.card}>
      <h3><span>5.</span>Description</h3> 
        <div className={styles.content}>
        <p>This is how prospective workers figure out what you need and why you’re great to work with!
Include your expectations about the task or deliverable, what you’re looking for in a work relationship, and anything unique about your task.</p>
    <input type="text"/>
    
        </div>
  
  </div>

    <div className={styles.card}>
    <h3><span>6.</span>Budget</h3> 
    <div className={styles.content}>
    <p>The pay you offer for the job</p>
    <span>KSH.<input type="text"/></span>
    </div>
    </div>
    
  
   
    
    
   <button type="submit" onClick={submit}>Post</button>
    </div>
    
   </div> 

    
    
    
   )

}