import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { GiBinoculars } from "react-icons/gi";
import UploadFileTwoToneIcon from '@mui/icons-material/UploadFileTwoTone';
import styles from "../../styles/navbar.module.scss";
import {updateLoginState} from "../../store/loginStatus";
import {updateuserinfo} from "../../store/userInfoReducer"
import {postId} from "../../store/postId"
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { Input } from '@chakra-ui/react'
import {motion} from "framer-motion"

const fadeInAnimationNav={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: .5, duration: 0.5, ease: "easeIn" } },
};
export default function Navbar(){

  const dispatch=useDispatch();
  const {loginStatus}=useSelector((state)=>state.login)
  const {client,worker}=useSelector((state)=>state.userInfo)
  useEffect(()=>{},[loginStatus]);
    return(
        <>
       <div className={styles.container}>
          <div className={styles.navbar}>
      
      <motion.div
      variants={fadeInAnimationNav}
      initial="initial"
      animate="animate" className={styles.nav}>
        <nav className={styles.navFirst}>
          <ul>
            <li>
              <Link href="/Jobs"><a>Find Work<GiBinoculars className={styles.binoculars}/></a></Link>
              
              
            </li>
            <li>
             
              <Link href="/Job"><a>Post Job<UploadFileTwoToneIcon className={styles.upload} /></a></Link>
           
              
            </li>
            <li>
             
              <Link href="/About"><a>About Us</a></Link>
              
            </li>
          </ul>
        </nav>
        <div className={styles.inputContainer}>
      <Input placeholder="Search" variant='outline' focusBorderColor='lime'     _placeholder={{  color: 'black' }}/>
        <FaSearch className={styles.searchIcon}/>
        </div>
        
        <nav className={styles.navbarSec} >
          <ul>
          {
  loginStatus===true && client===true? <li className={styles.btn}> <Link href="/Client_dashboard"><a>My Dashboard</a></Link></li> :""
}
       {
  loginStatus===true && worker===true? <li className={styles.btn}> <Link href="/worker_profile"><a>My Profile</a></Link></li> :""
}
{
  loginStatus===false ?<li className={styles.btn}> <Link href="/Sign_Up"><a >Sign Up</a></Link></li>:<></>
}

          {
            loginStatus===true ?<li className={styles.btn}> <Link href="/"><a  onClick={()=>{dispatch(updateLoginState({loginStatus:!loginStatus}))
                  dispatch(updateuserinfo({name:"",email:"",id:"",token:"",client:false,worker:false}))
                  dispatch(postId({postid:""}))
            }}>Log out</a></Link></li>
            :<li className={styles.btn}> <Link href="/Login"><a>Login</a></Link></li>
          }

            
            {/* <li className={styles.btn}>
             <Link href="/Sign_Up"><a>Sign Up</a></Link>
              
              
            </li> */}
           
          </ul>
        </nav>
       
       
      
         </motion.div>
      </div>
      </div>
        </>
    )
}