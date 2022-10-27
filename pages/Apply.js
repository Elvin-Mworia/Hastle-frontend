import styles from "../styles/apply.module.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
export default function Apply(){
    return(<div className={styles.container}>
        <h1>Apply For Job</h1>
        <div className={styles.applyWrapper}>
        <div className={styles.settings}>
            <h3>Proposal Settings</h3>
            <hr></hr>
            <span>The proposal requires 2 connects</span><br/>
            <span>When you submit this proposal, you will have 60  token remaining.</span>
        </div>
        <div className={styles.jobDetails}>
        <h3>Job Details</h3>
        <hr></hr>
        <div className={styles.content}>
            <h2>Habitant posuere pretium.</h2>
            <span className={styles.date}>posted:7-10-2022</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa orci platea in varius ac felis faucibus quis. Laoreet bibendum lorem vitae turpis faucibus bibendum. Adipiscing purus egestas odio eget. Sed lacus ultricies.S</p>

        </div>
        <hr></hr>
        <h4>Skills and Expertise</h4>
       <span>Lorem nisi</span>
       <span>Lorem nisi</span>
        </div>
        <div className={styles.coverLetter}>
        <h2>Cover Letter</h2><br/>
        <hr></hr>
        <span>Introduce yourself to the client,tell them what you do and how you might help them satisfy their wants.</span>
<input type="text"/>
        </div>
        <div className={styles.buttonsWrapper}>
         
        <Stack direction="row" spacing={2}>
      <Button variant="contained">Submit</Button>
      
      <Button variant="contained" href="#contained-buttons">
        Cancel
      </Button>
    </Stack>
        </div>
       
        </div>
    </div>)
}