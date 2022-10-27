import styles from "../styles/workerprofile.module.scss";
import Avatar from '@mui/material/Avatar';
import Image from "next/image";
import svg from "../public/image4.svg";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FolderList from "./components/list";
import electrician from 

export default function worker_profile(){
    const skills=["Carpentry","Plumbing","Labour work"]
    return(<div className={styles.container}>

    <div className={styles.profileWrapper}>
    <div className={styles.firstWrapper}>
    <Avatar alt="Remy Sharp" src=""
     className={styles.avatar} />
    <div className={styles.first}>
    <h2>Elvin Mworia</h2>
    <Image src={svg} height="47" width="54" alt=""></Image>
    <span>Juja,Kiambu</span>

    </div>
    
    </div>
    <div className={styles.second}>
    <div className={styles.header}>
     <h3>Skills</h3>
    <AddCircleOutlineIcon
    className={styles.addIcon}/>
    </div>
    <div className={styles.skills}>
    {skills.map((text,key)=>{return(<><FolderList content={text}/></>)})}
   
     </div>
    </div>
    <div className={styles.third}>
    <div className={styles.headerThird}><h3>Past Work</h3>
    <AddCircleOutlineIcon/>
    </div>
   
    <div className={styles.workImages}>
     
    <Image src={} height="" width="" alt="loaded image"></Image>
    </div>
    </div>
    
    
   
    
    
    </div>


    </div>)
}