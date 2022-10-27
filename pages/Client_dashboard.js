import styles from "../styles/clientdash.module.scss";
import Link from "next/link";
import dynamic from 'next/dynamic'
import Image from "next/image";
import svg from "../public/image5.svg";
import svg1 from "../public/image6.svg";
import svg2 from "../public/image7.svg";
import svg3 from "../public/image8.svg";
import svg4 from "../public/image9.svg";

// import 'react-dropdown/style.css';

// const DynamicHeader = dynamic(() => import(Dropdown from 'react-dropdown'), {
//   suspense: true,
// })
export default function Client_dashboard(){
    return(<div className={styles.container}>
    <div  className={styles.dashboard}>
    <div className={styles.dashboardLeft}>

    <div className={styles.dashboardLeftwrapper}>
    <div className={styles.heading}> 
    <span>Your Dashboard</span><br/>
    <span>Elvin Mworia</span><br/>
    <span>Available Tokens:60</span>
    </div>

    <div className={styles.middle}>
    <h3>Your Postings</h3><br/>
    <hr/>
    <Image src={svg} height="" width="" alt=""></Image>
    <h4>No active jobs posts at the moment</h4>
    <span>Post a job and let talent come to you</span><br/>
<Link href="/Post_Job"><a>Add Job</a></Link>

    </div>

    <div className={styles.thirdSection}>
    <h4>How to link up with a worker</h4><br/>
    <hr/>
    <h6>Steps</h6>
    <div className={styles.steps}>
    <Image className={styles.image} src={svg1} height="" width="" alt=""></Image>
    <div className={styles.stepContent}>
    <h4>1.Post a Job in the application.
  </h4>
  <p>Provide enough detail for great workers to figure out if the  work is right for them.</p>
  <p>(You can always edit your post)</p>
    </div>
    
    </div>
    <div className={styles.steps}><Image  className={styles.image} src={svg2} height="" width="" alt=""></Image>
     <div className={styles.stepContent}>
      <h4>2.Get a Proposal/Request from a worker/talent.
  </h4>
  <p>A strong working relationship starts with open communication. Here`&apos;`s your chance to ask about experience, set expectations for what you need, and discuss terms of the work. </p>
  </div>
    
    </div>
    <div className={styles.steps}><Image  className={styles.image} src={svg3} height="" width="" alt=""></Image>
     <div className={styles.stepContent}>
      <h4>3.Start working Together.
  </h4>
  <p>Once you both agree on terms, collaborate with simple and secure tools like our chat system, the worker is sent the location of your task premises.Exchanging your contacts is upto you but it’s encouraged for flexible communication. </p>
  </div>
    </div>
    <div className={styles.steps}><Image  className={styles.image} src={svg4} height="" width="" alt=""></Image>
     <div className={styles.stepContent}>
      <h4>4.Pay the worker on the agreed terms</h4>
      <p>Once the worker has finished the job and you are satisfied pay them on the agreed amount. Failure to which they have a right to report you on the plartform and be banned.</p>
     </div></div>

    </div>
    </div>

    </div>
     <div className={styles.dashboardRight}>
     <div >
      <button><Link href="/Buy_Hastles"><a>Buy Tokens</a></Link></button><br/>
     <button>Edit you Job Post</button><br/>
     <button>Completed Tasks</button></div>
   

    </div>
    </div>

    </div>)
}