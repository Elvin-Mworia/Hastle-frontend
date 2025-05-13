import Image from "next/image";
import svg from "../../public/image2.svg";
import styles from "../../styles/Home.module.scss";
function logo(){

    return(
        <div className={styles.logo}>
            <Image 
                src={svg}
                alt="Hastle Logo"
                width={150}
                height={50}
                priority
            />
        </div>
    )
}
export default logo;