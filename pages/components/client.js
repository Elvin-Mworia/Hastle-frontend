import {useState} from "react";
import styles from '../../styles/client.module.scss';
import { basicSchema } from "../../utils/basicSchema";
import axios from "axios";
import {motion} from 'framer-motion';

const fadeInAnimationForm={
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { delay: .8, duration: 0.3, ease: "easeIn" } },
};
const fadeInAnimationH2={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.5, ease: "easeIn" } },
};
export default function Client(){
  const [firstname,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setconfirmPassword]=useState("");
  async function  Submit(e){
    // const name=firstname+" "+lastname;
    e.preventDefault();
//   if(data){
//                           dispatch(updateLoginState({loginStatus:true}))
//                         dispatch(updateuserinfo({name:data.signup.name,email:data.signup.email}))
//                                    if(data.signup.client===true){
//                                           Router.push("/Client_dashboard");
//                                       }else{
//                                           Router.push("/Jobs");   
//                                       }
//   }
  }
  
 return(
    
    <motion.div variants={fadeInAnimationForm}
initial="initial"
animate="animate" className={styles.container}>

    <div className={styles.clientContainer}>
      <motion.h2 variants={fadeInAnimationH2}
initial="initial"
animate="animate">Client Sign Up</motion.h2>
       <form className={styles.inputWrapper} onSubmit={Submit}>
            <div className={styles.names}>
                <div className={styles.soloname}>
                < label for="firstName">First Name</label>
                <input type="text"
                value={firstname}
                onChange={(e)=>{setFirstName(e.target.value)}}
                required
                name="firstName"

                />
                </div>
                <div className={styles.soloname}>
                <label for="secondName">Second Name</label>
                <input type='text' value={lastname}
                onChange={(e)=>{setLastName(e.target.value)}}
                 required
                name="secondName"
                />
                </div>
                
            </div>
          <div className={styles.otherInputs}>
            <label for="email">Email</label>
                <input type="email"
                value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
                 required
                name="email"
                />  

          </div>
          
         <div className={styles.otherInputs}>
            <label for="phone">Phone Number</label>
                <input type="telephone"
                  value={phone}
                  onChange={(e)=>{setPhone(e.target.value)}}
                   required
                name="phone"
                /></div>
          
          
          <div className={styles.otherInputs}>
               <label for="password">Password</label>
                <input type="password"
                  value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                  required
                name="password"

                />
          </div>
         
          <div className={styles.otherInputs}>
               <label for="confirmpassword">Confirm Password</label>
                <input type="password"
                  value={confirmPassword}
                     required
                 onChange={(e)=>{setconfirmPassword(e.target.value)}}
                  name="confirmpassword"
              />
          </div>
         
                {/* {errors.confirmPassword && touched.confirmPassword &&
                (<p className={styles.errors}>{errors.confirmPassword}</p>)} */}
      <button type="submit" >Submit</button>
            </form>
 </div>
    </motion.div>
 )
}