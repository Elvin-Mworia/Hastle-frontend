import OutlinedCard from "./components/Card";
import apollo from "../utils/apolloclient.js"
import {gql} from "@apollo/client"

import React from 'react';

export async function getServerSideProps(){
  try {
    const {data} = await apollo.query({
      query: gql`
        query Posts {
          posts {
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
    
    return {
      props: {
        jobs: data?.posts || []
      }
    };
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return {
      props: {
        jobs: []
      }
    };
  }
}


export default function Profile({jobs}){
  if (!jobs || jobs.length === 0) {
    return (
      <div>
        <h2>No jobs available</h2>
      </div>
    );
  }

  return (
    <>
      {jobs.map((job, index) => (
        <React.Fragment key={index}>
          <OutlinedCard 
            title={job.title} 
            jobdescription={job.jobdescription}
          />
        </React.Fragment>
      ))}
    </>
  )
}