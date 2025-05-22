import {useState} from "react";
import {motion} from 'framer-motion';
import {useSelector} from "react-redux"
import Image from "next/image";
import {useFormik} from 'formik';
import styles from '../../styles/client.module.scss';
import { basicSchema } from "../../utils/basicSchema";
import { Input } from '@chakra-ui/react'

const fadeInAnimationForm={
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { delay: .8, duration: 0.3, ease: "easeIn" } },
};
const fadeInAnimationH2={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.5, ease: "easeIn" } },
};

export default function Worker(){
  const{client,worker}=useSelector((state)=>(state.user));
  const [firstname,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setconfirmPassword]=useState("");

const  Submit=(e)=>{
  const fullname=firstname+" "+lastname;
  console.log(fullname);

}
    return(<motion.div variants={fadeInAnimationForm}
            initial="initial"
            animate="animate"
            className={styles.container}>
        
        <div className={styles.clientContainer}>
        <motion.h2  
        variants={fadeInAnimationH2}
        initial="initial"
        animate="animate">Expert Sign Up</motion.h2>
        <form className={styles.inputWrapper} onSubmit={Submit}>
            <div className={styles.names}>
                <div className={styles.soloname}>
                < label for="firstName">First Name</label>
            <Input
        value={firstname}
        focusBorderColor='lime'
        color='gray.300'
        onChange={(e)=>{setFirstName(e.target.value)}}
        size='md'
        variant='outline'
      />
                </div>
                <div className={styles.soloname}>
               <label for="secondName">Second Name</label>
                         <Input
        value={lastname}
        focusBorderColor='lime'
        color='gray.300'
        onChange={(e)=>{setLastName(e.target.value)}}
        size='md'
        variant='outline'
      />
                </div>
                
            </div>
            <div className={styles.otherInputs}>
          
            <label for="email">Email</label>
                <input type="email"
                value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              
                name="email"
                />
         </div>
        <div className={styles.otherInputs}>
            <label for="phone">Phone Number</label>
                <input type="telephone"
                  value={phone}
                  onChange={(e)=>{setPhone(e.target.value)}}
                
                name="phone"
                />
          </div>
 <div className={styles.otherInputs}>
            <label for="password">Password</label>
                <input type="password"
                  value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
               
                name="password"

                />
         </div>
       <div className={styles.otherInputs}>
            <label for="confirmpassword">Confirm Password</label>
                <input type="password"
                  value={confirmPassword}
                 onChange={(e)=>{setconfirmPassword(e.target.value)}}
                  name="confirmpassword"
              />
              </div>
                {/* {errors.confirmPassword && touched.confirmPassword &&
                (<p className={styles.errors}>{errors.confirmPassword}</p>)} */}
      <button type="submit"  onSubmit={Submit}>Submit</button>
            </form>
 
 
      </div>
      </motion.div>
        
    )
}