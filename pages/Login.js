import styles from "../styles/Login.module.scss";
import svg from "../public/image1.svg";
import Image from "next/image";
import Router from "next/router"
import Link from "next/link"
import {gql, useMutation} from "@apollo/client"
import {useState} from "react";
import {updateLoginState} from "../store/loginStatus";
import {useSelector,useDispatch} from "react-redux";
import axios from "axios";
import BasicModal from "./components/loginerror";
import {updateuserinfo} from "../store/userInfoReducer"
import { Input } from '@chakra-ui/react'

export default function Login(){
const dispatch=useDispatch();
const {loginStatus}=useSelector((state)=>state.login)
const[email,setEmail]=useState("")
const[password,setPassword]=useState("");
const[message,setMessage]=useState("")
const[loginfail,setLoginfailed]=useState(false);
const loginMutation=gql`
mutation Login($input: loginInput!) {
  login(input: $input) {
    name,
    email,
    client,
    worker
    
  }
}

`

//const[login,{data,error,loading}]=useMutation(loginMutation);

async function handleSubmit(e){
 
    axios.post("http://localhost:5001/auth/login",{email,password}).then((res,err)=>{
              
                 console.log(res.status)
                 console.log(res);
                 try{
                
                if(res.status===200){
                    setLoginfailed(false);
                      dispatch(updateLoginState({loginStatus:!loginStatus}))
                      dispatch(updateuserinfo({name:res.data.user.firstName+" "+res.data.user.lastName,email:res.data.user.email,id:res.data.user._id,token:res.data.user.tokenAmount,firstName:res.data.user.firstName,lastName:res.data.user.lastName,userCategory:res.data.user.userCategory}))
                                 if(res.data.user.userCategory==="employer"){
                                        Router.push("/Client_dashboard");
                                    }else{
                                        Router.push("/Jobs");   
                                    }

                }
                 
                 }catch(err){
                    console.log(err)
              
                 }
    

                }).catch(
                    (e)=>{
                        console.log(e.message)
                        setMessage(e.message);
                        setLoginfailed(true);
              alert(e.message);
            
                
              
              

                    }
                )
    
//  login({
//         variables:{
//             input:{
//             email:email,
//             password:password
//             }
//         }
//     })
   // console.log(data);
// if(data){
//     console.log(data);
//      console.log(data.login.name);
    
//     dispatch(updateLoginState({loginStatus:!loginStatus}))
    
// }else{
//     if(error){
//         console.log(error)
//     }
// }

// if(data.login.client){
//     Router.push("/Client_dashboard");
// }
// else{
//     Router.push("/Jobs");
    
// }

}


    return(
        <>
     <div className={styles.container}>
            <div className={styles.loginContainer}>
                <div className={styles.inputContainer}>
                <h6>Email/Phone</h6>
                   <Input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="email/phone"
        size='md'
      />
                {/* <input placeholder="email/phone" type="text"
                 onChange={(e)=>setEmail(e.target.value)}/> */}
                <h6>Password</h6>
                {/* <input placeholder="" type="password"
                onChange={(e)=>setPassword(e.target.value)} 
                /> */}
                            <Input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"
        size='md'
      />
                </div>
                <div className={styles.submitContainer}>
                <button type="submit" onClick={()=>{handleSubmit()}}>Login</button>
                <p><u>Forgot your password?</u></p>
                  <p>Don&apos;t have an account,<u><Link href="/Sign_Up"><a>Sign Up</a></Link></u></p>

                </div>

            </div>
    
        </div>

        </>
    )
}