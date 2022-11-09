import {useState} from "react";
import svg1 from "../../public/image3.svg";
import { gql, useMutation} from "@apollo/client";
import Image from "next/image";
import {useFormik} from 'formik';
import styles from '../../styles/client.module.scss';
import { basicSchema } from "../components/basicSchema";
import Router from "next/router"
import {useSelector} from "react-redux"
import {updateuserinfo} from "../../store/userInfoReducer"
import {updateLoginState} from "../../store/loginStatus"
import axios from "axios";


export default function Client(){
  const{client,worker}=useSelector((state)=>(state.user));
  const{id,name,token}=useSelector((state)=>(state.userInfo));
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
      client
    }
  }
  
  `

const [signup,{data,error}]=useMutation(signupMutation);
async function  Submit(e){
  const name=firstname+" "+lastname;
 console.log({name,email,password,phone,client,worker});
//  axios.post("http://localhost:3005/Auth/register",{name,email,password,phone,client,worker}).then((res)=>{
//                   console.log(res.data.user);
//                  try{
                
//                 if(res.status===200){
             
                      // dispatch(updateLoginState({loginStatus:true}))
                      // dispatch(updateuserinfo({id:res.data.user.id,name:res.data.user.name,token:res.data.user.token}))
                      //            if(res.data.user.client==true){
                      //                   Router.push("/Client_dashboard");
                      //               }else{
                      //                   Router.push("/Jobs");   
                      //               }

//                 }
                 
//                  }catch(err){
//                     console.log(err)
              
//                  }
    

//                 }).catch(
//                   (e)=>{
//                         console.log(e);
                     

//                     }
//                 )






signup({variables:{
  input:{
  name:name,
  email:email,
  phone:phone,
  password:password,
  client:client,
  worker:worker

  }
}});

if(data){
                        dispatch(updateLoginState({loginStatus:true}))
                      dispatch(updateuserinfo({name:data.signup.name,email:data.signup.email}))
                                 if(data.signup.client===true){
                                        Router.push("/Client_dashboard");
                                    }else{
                                        Router.push("/Jobs");   
                                    }
}


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
          
            <label for="email">Email</label>
                <input type="email"
                value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
                 required
                name="email"
                />
         
            <label for="phone">Phone Number</label>
                <input type="telephone"
                  value={phone}
                  onChange={(e)=>{setPhone(e.target.value)}}
                   required
                name="phone"
                />
          
 
            <label for="password">Password</label>
                <input type="password"
                  value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                  required
                name="password"

                />
         
       
            <label for="confirmpassword">Confirm Password</label>
                <input type="password"
                  value={confirmPassword}
                     required
                 onChange={(e)=>{setconfirmPassword(e.target.value)}}
                  name="confirmpassword"
              />
                {/* {errors.confirmPassword && touched.confirmPassword &&
                (<p className={styles.errors}>{errors.confirmPassword}</p>)} */}
      <button type="submit" >Submit</button>
            </form>
 
 
      </div>
      </div>
        
    )
}

// onClick={()=>{Submit()
//        console.log({name,email,password,phone,client,worker})
//       }}

