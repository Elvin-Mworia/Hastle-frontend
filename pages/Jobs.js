import styles from "../styles/jobsworker.module.scss"
import {useState} from "react";
import React from 'react';
import Avatar from '@mui/material/Avatar';
import OutlinedCard from "./components/Card";
import Navbar from "./components/navbar";
import apollo from "../utils/apolloclient.js"
import {gql} from "@apollo/client"
import {useSelector} from "react-redux"
import { Input,InputGroup,InputRightElement} from '@chakra-ui/react';
import { FaSearch } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { Stack,VStack} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

// export async function getServerSideProps() {
//   try {
//     // const { data } = await apollo.query({
//     //   query: gql`
//     //     query Posts {
//     //       posts {
//     //         jobdescription,
//     //         scope,
//     //         title,
//     //         amount,
//     //         id,
//     //         numofworkers
//     //       }
//     //     }
//     //   `
//     // });
    
//     return {
//       props: {
//         // jobs: data?.posts || []
//           jobs: [] 
//       }
//     };
//   } catch (error) {
//     // Silent error handling for build process
//     return {
//       props: {
//         jobs: [{title: "Error fetching jobs", jobdescription: "An error occurred while fetching jobs.",id:1}]
//       }
//     };
//   }
// }
const jobs=[{title: "Error fetching jobs", jobdescription: "An error occurred while fetching jobs.",id:1},{title: "Error fetching jobs", jobdescription: "An error occurred while fetching jobs.",id:1},{title: "Error fetching jobs", jobdescription: "An error occurred while fetching jobs.",id:1},{title: "Error fetching jobs", jobdescription: "An error occurred while fetching jobs.",id:1},{title: "Error fetching jobs", jobdescription: "An error occurred while fetching jobs.",id:1},{title: "Error fetching jobs", jobdescription: "An error occurred while fetching jobs.",id:1},{title: "Error fetching jobs", jobdescription: "An error occurred while fetching jobs.",id:1}]
export default function Jobs(){
const[content,setContent]=useState("");
 const {name,token,id}=useSelector((state)=>state.userInfo)
const handleChange=(e)=>{
    setContent(e.target.value);
    e.preventDefault();
}
    return(

    <div className={styles.container}>
      <Navbar/>
     
        <div className={styles.bodyContainer}>
            
          <div className={styles.contentHolder}>
            <Stack direction='row' spacing={4} align='center' className={styles.header}>
             
            <InputGroup className={styles.searchgroup}>
            <Stack direction='row' spacing={2} >
            <InputRightElement >
              <FaSearch className={styles.searchIcon}/>
                 <FaFilter className={styles.searchIcon}  />
            </InputRightElement>
            </Stack>
                 <Input className={styles.searchbar} variant='unstyled' size='xs' placeholder='search job'  onChange={handleChange}/>
             
            </InputGroup>
            <Select placeholder='Filter by Distance'  className={styles.select}>
              <option value='1'>under 1km radius</option>
              <option value='2'>under 2km radius</option>
              <option value='5'>under 5km radius</option>
            </Select>
              <Select placeholder='Filter by Category'  className={styles.select}>
              <option value='electrical'>Electricals</option>
              <option value='plumbing'>Plumbing</option>
              <option value='carpentry'>Carpentry</option>
              <option value='weilding'>Weilding</option>
            </Select>
             </Stack>
              <VStack className={styles.jobs}>
                {jobs?.map((job, index) => (
              <OutlinedCard 
                key={index}
                title={job.title} 
                jobdescription={job.jobdescription} 
                id={job.id}
              />
            ))}
              </VStack>
          </div>
        </div>

    </div>
    )
}