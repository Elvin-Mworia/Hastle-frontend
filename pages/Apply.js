import styles from "../styles/apply.module.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import Navbar from "./components/navbar";
import {updateuserinfo} from "../store/userInfoReducer"
import {gql} from "@apollo/client";
import apollo from "../utils/apolloclient"
import store from "../store/store"
import{useSelector} from "react-redux"

export async function getStaticProps(){
 const state=store.getState();
    const post=gql`
    query Singlepost($input: userInput!) {
  singlepost(input: $input) {
    title
    category
    jobdescription
  }
}

`
const ID=state.postId.postid
console.log(ID);
const {data}= await apollo.query({
  query:post,
  variables:{input:{id:"6361f0d4720031c10f3f05e1"}}
})


    return{
        props:{data}
    }
}

export default function Apply({data}){
console.log(data);

const {token,id}=useSelector((state)=>state.userInfo)
// const {postid}=useSelector((state)=>state.postId)
// const {data}=useQuery(post,{variables:{input:{id:id}}})

    return(<>
    <Navbar/>
    <div className={styles.container}>
        <h1>Apply For Job</h1>
        <div className={styles.applyWrapper}>
        <div className={styles.settings}>
            <h3>Proposal Settings</h3>
            <hr></hr>
            <span>The proposal requires 2 connects</span><br/>
            <span>When you submit this proposal, you will have {token}  token remaining.</span>
        </div>
        <div className={styles.jobDetails}>
        <h3>Job Details</h3>
        <hr></hr>
        <div className={styles.content}>
            <h2>{data.singlepost.title}</h2>
            {/* <span className={styles.date}>posted:7-10-2022</span> */}
            <p>{data.singlepost.jobdescription}</p>

        </div>
        <hr></hr>
        <h4>Skills and Expertise</h4>
       <span>{data.singlepost.category}</span>
       
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
    </div>
    </>)
}