import styles from  "../styles/buy.module.scss"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import svg from "../public/mobile_payment.svg";
import Image from "next/image";
import svg1 from "../public/mobile_payment1.svg";

export default function Buy_Hastles(){
    return(<div className={styles.container}>
     <h3>Buy Hastles</h3>
     <div className={styles.parentWrapper}>
       <Image src={svg} height="" width="" alt=""></Image>
    <div className={styles.wrapper}>
  
   
    <div className={styles.buyform}>
    <h6>Your token balance currently:0</h6>
    <label>Enter the amount of tokens to buy</label>
    <input type="text"/><br/>
    <span>You will be charged</span><br/>
     <input type="text" placeholder="60" disabled/>

    <label>Your new token balance will be</label>
    <input type="text" placeholder="60" disabled/>
    <h4>Enter Mpesa No.</h4>
    <input type="text" required/>

  <div className={styles.buttonsWrapper}>
         
        <Stack direction="row" spacing={1} >
      <Button variant="contained">Submit</Button>
      
      <Button variant="contained" >
        Cancel
      </Button>
    </Stack>
    
        </div>
       

    
    
    </div>
  
    </div>
  <Image src={svg1} height="" width="" alt=""></Image>
    
        
        </div>
        </div>
)}