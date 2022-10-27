import styles from "../styles/Login.module.scss";
import svg from "../public/image1.svg";
import Image from "next/image";


export default function Login(){
    return(
        <div className={styles.container}>
            <Image src={svg} alt="" className={styles.image_p} height="400" width="400"></Image>
            <div className={styles.loginContainer}>
                <div className={styles.inputContainer}>
                <h6>Email/Phone</h6>
                <input placeholder="email/phone" type="text" ></input>
                <h6>Password</h6>
                <input placeholder="" type="password"></input>
                </div>
                <div className={styles.submitContainer}>
                <button>Login</button>
                <p><u>Forgot your password?</u></p>
                </div>

            </div>
      
        </div>
    )
}