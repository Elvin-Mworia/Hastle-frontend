import styles from  "../styles/buy.module.scss"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import svg from "../public/mobile_payment.svg";
import Image from "next/image";
import svg1 from "../public/mobile_payment1.svg";
import Navbar from "./components/navbar";
import axios from "axios"
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import {updateuserinfo} from "../store/userInfoReducer"

export default function Buy_Hastles(){
  const[phone,setPhone]=useState('0');
  const[amount,setAmount]=useState('');
  const {token,id}=useSelector((state)=>state.userInfo)
  const dispatch=useDispatch();

async function handleSubmit(){  

axios.post("http://localhost:3005/buy/",{
  phone,amount,id}).then((res,error)=>{
console.log(res);
  }
  ).catch(
  (e)=>console.error(e)
)
}

    return(
    <>
    <Navbar/>
    <div className={styles.container}>
     <h3>Buy Hastles</h3>
     <div className={styles.parentWrapper}>
       <Image src={svg} height="" width="" alt=""></Image>
    <div className={styles.wrapper}>
  
   
    <form className={styles.buyform}>
    <h6>Your token balance currently:{token}</h6>
    <label>Enter the amount of tokens to buy</label>
    <input type="text" onChange={(e)=>{setAmount(e.target.value)}} required/><br/>
    <span>You will be charged</span><br/>
     <input type="text" placeholder={amount} disabled/>
{}
    <label>Your new token balance will be</label>
    <input type="text" placeholder={Number(token)+Number(amount)} disabled/>
    <h4>Enter Mpesa No.</h4>
    <input type="text" onChange={(e)=>{setPhone(e.target.value)}} required/>

  <div className={styles.buttonsWrapper}>
         
        <Stack direction="row" spacing={1} >
      <Button variant="contained" type="submit" onClick={()=>{handleSubmit}}>Submit</Button>
      
      <Button variant="contained" >
        Cancel
      </Button>
    </Stack>
    
        </div>
       

    
    
    </form>
  
    </div>
  <Image src={svg1} height="" width="" alt=""></Image>
    
        
        </div>
        </div>
        </>
)}