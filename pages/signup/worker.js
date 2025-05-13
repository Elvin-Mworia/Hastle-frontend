import {useState} from "react";
import svg1 from "../../public/image3.svg";
import {useSelector} from "react-redux"
import { gql, useMutation} from "@apollo/client";
import Image from "next/image";
import {useFormik} from 'formik';
import styles from '../../styles/client.module.scss';
import { basicSchema } from "../../utils/basicSchema";


export default function Worker(){
  const{client,worker}=useSelector((state)=>(state.user));
  const [firstname,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setconfirmPassword]=useState("");
  const signupMutation=gql`
  mutation Signup($input:registerInput!){
    signup(input:$input){
      name
      email
      
    }
  }
  
  `

const [signup,{data,error}]=useMutation(signupMutation);
const  Submit=(e)=>{
  const fullname=firstname+" "+lastname;
  console.log(fullname);
signup({variables:{
  input:{
  name:fullname,
  email:email,
  phone:phone,
  password:password,
  client:client,
  worker:worker

  }
}});


}

// const {
//     values,
//     errors,
//     touched,
//     isSubmitting,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: {
//       firstname:"",
//       lastname:"",  
//       email: "",
//       phone: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: basicSchema,
//     Submit,
//   });



    return(<div className={styles.container}>
        
        <div className={styles.clientContainer}>
        <Image src={svg1} height="250" width="250" alt=""/>
        <form className={styles.inputWrapper} onSubmit={Submit}>
            <div className={styles.names}>
                <div className={styles.soloname}>
                < label for="firstName">First Name</label>
                <input type="text"
                value={firstname}
                onChange={(e)=>{setFirstName(e.target.value)}}
                
                name="firstName"

                />
                </div>
                <div className={styles.soloname}>
                <label for="secondName">Second Name</label>
                <input type='text' value={lastname}
                onChange={(e)=>{setLastName(e.target.value)}}
              
                name="secondName"
                />
                </div>
                
            </div>
          
            <label for="email">Email</label>
                <input type="email"
                value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              
                name="email"
                />
         
            <label for="phone">Phone Number</label>
                <input type="telephone"
                  value={phone}
                  onChange={(e)=>{setPhone(e.target.value)}}
                
                name="phone"
                />
          
 
            <label for="password">Password</label>
                <input type="password"
                  value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
               
                name="password"

                />
         
       
            <label for="confirmpassword">Confirm Password</label>
                <input type="password"
                  value={confirmPassword}
                 onChange={(e)=>{setconfirmPassword(e.target.value)}}
                  name="confirmpassword"
              />
                {/* {errors.confirmPassword && touched.confirmPassword &&
                (<p className={styles.errors}>{errors.confirmPassword}</p>)} */}
      <button type="submit"  onSubmit={Submit}>Submit</button>
            </form>
 
 
      </div>
      </div>
        
    )
}