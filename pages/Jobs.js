import styles from "../styles/jobsworker.module.scss"
import {useState} from "react";
import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import OutlinedCard from "./components/Card";
import Navbar from "./components/navbar";
import apollo from "../utils/apolloclient.js"
import {gql} from "@apollo/client"
import {useSelector} from "react-redux"
import { Input,InputGroup,InputRightElement} from '@chakra-ui/react';
import { FaSearch } from "react-icons/fa";

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
const jobs=[{title: "Error fetching jobs", jobdescription: "An error occurred while fetching jobs.",id:1}]
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
            <InputGroup className={styles.searchgroup}>
            <InputRightElement>
              <FaSearch className={styles.searchIcon}/>
            </InputRightElement>
                 <Input className={styles.searchbar} variant='unstyled' size='xs' placeholder='search job'  onChange={handleChange}/>
            </InputGroup>
       
             
          </div>
        </div>

    </div>
    )
}