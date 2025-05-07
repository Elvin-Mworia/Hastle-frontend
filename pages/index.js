
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import workers from "../public/taxi-handshake.gif";
import client from "../public/client.png";
import construction from "../public/construction.jpg";
import svg from "../public/image2.svg";
import Link from "next/link";
import test1 from "../public/testimonials/image1.jpg";
import test2 from "../public/testimonials/handyman.png";
import test3 from "../public/testimonials/plumber.png";
import test4 from "../public/testimonials/wielder.png";
import { FaSearch } from "react-icons/fa";
import { GiBinoculars } from "react-icons/gi";
import UploadFileTwoToneIcon from '@mui/icons-material/UploadFileTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import Navbar from "./components/navbar";


export default function Home() {
  return (
    <>
   
    <div className={styles.container}>

      <main className={styles.main}>  
        <Navbar/>
      <section className={styles.firstSection}>
    
<h1>Finding your next hustle does not have to be stressful.
Work does not have to be far,Hastle will help you find opportunities near you.
</h1>

      </section>
<section className={styles.secondSection}>
<h1 className={styles.howitworks}>How it works</h1>
<div>
 <h4>1.Sign up as a client(employer) if you have a job that needs to be done and post the task description filling in the necessary details as you&apos;ll be guided.</h4>
<h4>2.If you are a person looking to exchange their skills for money or have the know how to do certain tasks you can register and the app will send you notifications 
  regarding the job categories you selected within a specied distance radius.
</h4>
<h4>3.Apply for the job by sending a proposal to the employer and wait for a feedback.</h4>
<Link href="/Sign_Up">
<a>Sign Up To Get Started</a>
</Link>

 
</div>

</section>
<section className={styles.fourth}>
<h2>Testimonials</h2>
<div className={styles.testimonials}>
<div><Image src={test1} height={200} width={200} alt=""></Image>
<h6>&quot;Hastle imenijenga sana kwa kazi yangu,napata clients for my business more easily.&quot;</h6>
</div>
<div><Image src={test2} height={200} width={200} alt=""></Image>
<h6>&quot;So many opportunities from within,Hastle has saved me time and money by connecting me to works nearby.&quot;</h6>
</div>
<div><Image src={test3} height={200} width={200} alt=""></Image>
<h6>&quot;Hastle imeniexpose to the many clients that need my plumbing services conviniently bila mambo mingi.&quot;</h6>
</div>
<div><Image src={test4} height={200} width={200} alt=""></Image>
<h6>&quot;Hastle is the way wakuu,opportunities ni mob kwa watu kaa sisi wa handcrafting.&quot;</h6></div>

</div>

</section>

      
        
 
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
      <div>
      <Link href="#"><a>How to Hire</a></Link>
       <Link href="#"><a>How to find work</a></Link>
        <Link href="#"><a>Help & Support</a></Link>
      </div>
         <div>
          <Link href="#"><a>Terms & Conditions</a></Link>
           <Link href="#"><a>Privacy Policy</a></Link>
            <Link href="#"><a>Contact Us</a></Link>
         </div>
         </div>
            <div className={styles.socials}>
            <Link href="#"><a><InstagramIcon/></a></Link>
           <Link href="#"><a><WhatsAppIcon/></a></Link>
            <Link href="#"><a><TwitterIcon/></a></Link>
            </div>
        
      </footer>
    </div>
    </>
  )
}
