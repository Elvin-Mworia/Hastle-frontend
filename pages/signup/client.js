
import svg1 from "../../public/image3.svg";

import Image from "next/image";

import styles from '../../styles/client.module.scss';
export default function worker(){
    return(<div className={styles.container}>
        
        <div className={styles.clientContainer}>
        <Image src={svg1} height="250" width="250" alt=""/>
        <div className={styles.inputWrapper}>
            <div className={styles.names}>
                <div>
                <label>First Name</label>
                <input type="text"/>
                </div>
                <div>
                <label>Second Name</label>
                <input/>
                </div>
                
            </div>
            <div className={styles.names}>
            <label>Email</label>
                <input type="email"/>
            </div>
            <div className={styles.names}>
            <label>Phone Number</label>
                <input type="telephone"/>
            </div>
            <div className={styles.names}>
            <label>Password</label>
                <input type="password"/>
            </div>
            <div className={styles.names}>
            <label>Confirm Password</label>
                <input type="password"/>
            </div>
            </div>
            
        
       
        
       
     
         
         
 
 
      </div>
      </div>
        
    )
}