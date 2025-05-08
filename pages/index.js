
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import workers from "../public/taxi-handshake.gif";
import client from "../public/client.png";
import construction from "../public/construction.jpg";
import svg from "../public/image2.svg";
import Link from "next/link";
import test1 from "/public/testimonials/image1.jpg";
import test2 from "/public/testimonials/handyman.png";
import test3 from "/public/testimonials/plumber.png";
import test4 from "/public/testimonials/wielder.png";
import { FaSearch } from "react-icons/fa";
import { GiBinoculars } from "react-icons/gi";
import UploadFileTwoToneIcon from '@mui/icons-material/UploadFileTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import Navbar from "./components/navbar";
import CardHomepage from './components/CardHomepage';
import {motion} from 'framer-motion';

const fadeInAnimationH1={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: .8, duration: 0.5, ease: "easeOut" } },
};
const fadeInAnimationSection={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.5, ease: "easeInOut" } },
};

const fadeInAnimationhowItWorks={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 1.3, duration: 0.5, ease: "easeInOut" } },
};
const fadeInAnimationhowItWorksh4_1={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.5, ease: "easeInOut" } },
};
const fadeInAnimationhowItWorksh4_2={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 1.7, duration: 0.5, ease: "easeInOut" } },
};
const fadeInAnimationhowItWorksh4_3={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 1.9, duration: 0.5, ease: "easeInOut" } },
};
const fadeInAnimationSignUp={
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 2.1, duration: 0.5, ease: "easeInOut" } },
};
export default function Home() {
  return (
    <>
   
    <div className={styles.container}>

      <main className={styles.main}>  
        <Navbar/>
      <section className={styles.firstSection}>
    
<motion.h1
variants={fadeInAnimationH1}
initial="initial"
animate="animate"
>Finding your next hustle does not have to be stressful.
Work does not have to be far,Hastle will help you find opportunities near you.
</motion.h1>

      </section>
<motion.section className={styles.secondSection}
variants={fadeInAnimationSection}
initial="initial"
animate="animate"
whileInView={{ opacity: 1, y: 0 }} // State when in view (visible and in place)
viewport={{ once: true, amount: 0.5 }}>
<motion.h1 
variants={fadeInAnimationhowItWorks}
initial="initial"
animate="animate"
className={styles.howitworks}>How it works</motion.h1>
<div>
 <motion.h4
 variants={fadeInAnimationhowItWorksh4_1}
 initial="initial"
 animate="animate"
 >1.Sign up as a client(employer) if you have a job that needs to be done and post the task description filling in the necessary details as you&apos;ll be guided.</motion.h4>
<motion.h4
variants={fadeInAnimationhowItWorksh4_2}
initial="initial"
animate="animate"
>If you are a person looking to exchange their skills for money or have the know how to do certain tasks you can register and the app will send you notifications 
  regarding the job categories you selected within a specied distance radius.
</motion.h4>
<motion.h4
variants={fadeInAnimationhowItWorksh4_3}
initial="initial"
animate="animate">3.Apply for the job by sending a proposal to the employer and wait for a feedback.</motion.h4>
<Link href="/Sign_Up">
<motion.a
variants={fadeInAnimationSignUp}
initial="initial"
animate="animate">Sign Up To Get Started</motion.a>
</Link>
</div>
</motion.section>
<section className={styles.fourth}>
<h2>Testimonials</h2>
<div className={styles.testimonials}>
  <CardHomepage name="John Doe" testimonial="&quot;Hastle imenijenga sana kwa kazi yangu,napata clients for my business more easily.&quot;" imagelink={test1}/>
  <CardHomepage name="Joe Doe" testimonial="&quot;Hastle has saved me time and money by connecting me to works nearby.&quot;" imagelink={test2}/>
  <CardHomepage name="Jaden Smith" testimonial="&quot;Hastle imeniexpose to the many clients that need my plumbing services conviniently.&quot;" imagelink={test3}/>
  <CardHomepage name="Jim Doe" testimonial="&quot;Hastle is the way wakuu,opportunities ni mob kwa watu kaa sisi wa handcrafting.&quot;" imagelink={test4}/>
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
