import OutlinedCard from "./components/Card";
import apollo from "../utils/apolloclient.js"
import {gql} from "@apollo/client"

export  async function getStaticProps(){
    const {data}= await apollo.query({
        query:gql`
        query Posts{
            posts{
                jobdescription,
  category,
  scope,
  title,
  amount,
  status,
  numofworkers
            }
        }
        `
    });
    //console.log(data);
       
        return {
            props:{jobs:data.posts},
            revalidate:10,
        }
        
        
      

}


export default function Profile({jobs}){
//console.log(jobs);
// //  for(i in jobs){
//     console.log(jobs[i]);
//    }
jobs.map((job,key)=>{
    console.log(job)
})
   let job={
        title:"qqqqqqqq",
        jobdescription:"aaaaaaaaaa"
    }
    let i=0
    return(<>
 {jobs.map((job,key)=>{
    return(
    <>
  
   {/* <OutlinedCard   title={job.title}  jobdescription={job.jobdescription}/> */}

   <h1>{job.title}</h1>
    </>
    )

})} 

 {/* <OutlinedCard   title={jobs[0].title}  jobdescription={jobs[0].jobdescription}/> */}
    
    </>)
}