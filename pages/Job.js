import styles from "../styles/clientjob.module.scss";
import svg from "../public/location.svg";
import svg1 from "../public/locationicon.svg";
import {useState}  from 'react';
import Select from "react-select";
//import BasicModal from "./components/mapModal";
import Image from "next/image";
import Navbar from "./components/navbar";
import {useMutation,gql} from "@apollo/client"
 import {useSelector} from "react-redux"
import {updateuserinfo} from "../store/userInfoReducer"
import { uuid } from 'uuidv4';
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Stack,VStack} from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
export default function  Job(){
const post=gql`
mutation PostJob($input: jobInput!) {
  postJob(input: $input) {
    jobdescription
    title
    id
  }
}
`

  const [selectedValue, setSelectedValue] =useState('Small');
  const [category,setCategory]=useState('')
  const [title,setTitle]=useState('');
const [description,setDescription]=useState('')
const[pay,setPay]=useState('')
const [numofworkers,setNum]=useState('')
  const {id}=useSelector((state)=>state.userInfo)
  const {lng,lat}=useSelector((state)=>state.map)
const [postjob,{data}]=useMutation(post);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    event.preventDefault();
  };

  const handleSelect=(selectedOption)=>{
    setCategory(selectedOption);
  }
  const options=[{value:"Plumbing",label:"Plumbing"},
  {value:"Welding",label:"Welding"},
  {value:"Labour",label:"Labour/Kazi ya mkono"},
  {value:"Capentry",label:"Capentry/Woodwork"},
  {value:"Electricals",label:"Wiring/Electricals"},
  {value:"Construction",label:"Construction"},
  {value:"Cleaning",label:"Cleaning"}
  
  ]
  const submit=(e)=>{
 let objdata={
out:uuid()

 }
 console.log(objdata);
postjob({
  variables:{
    input:{
      id:uuid(),
      text:description,
      createdBy:id,
      long:lng,
      lat:lat,
      title,
      category,
      scope:selectedValue,
      amount:Number(pay),
      status:"Open",
      numofworkers:Number(numofworkers),
    }
  }
})
   e.preventDefault();

  }
    return(
    <><Navbar/>
<div className={styles.container}>
<Grid templateColumns='repeat(2, 1fr)' 
  templateAreas={`"firstleft firstright"
                  "secondleft secondright"
                  "thirdleft thirdright"
                  "fourthleft fourthright"`} gap={4} className={styles.jobWrapper}> 
 <GridItem className={styles.card} area={'firstleft'}>
    <Tooltip label="This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count" bg='rgba(242, 116, 0, 1)' fontSize="sm" hasArrow placement="right-start"><h3><span>1. </span>Let&apos;s start with a strong title</h3> </Tooltip>
    <div className={styles.content}>
    <div className={styles.indent}> 
   </div>
   <input type="text"onChange={(e)=>{setTitle(e.target.value)}} className={styles.firstrow} value={title} required />
    </div>
    </GridItem>
<GridItem className={styles.card} area={'secondleft'}>
          <Tooltip label="This helps your accepted workers with direction to the job&apos;s site" bg='rgba(242, 116, 0, 1)' fontSize="sm" hasArrow placement="right-start">
            <h3><span>2.</span>Add the pin point of prospective job premises <Image src={svg} height="" width="" alt=""></Image></h3>  </Tooltip>
    <div className={styles.content}>
    <Image src={svg1} height="" width="" alt=" " onClick={()=>alert("clicked")} style={{cursor:"pointer"}}></Image>
    {/* <BasicModal/>  mapbox error(Geocoder) */}
    </div>
 </GridItem>
<GridItem className={styles.card} area={'thirdleft'}>
    <h3 className={styles.h3h}><span>3.</span>Choose the category of job it belongs to make it reach the right audience. </h3>
    <div className={styles.content}>  
 <Select options={options} onChange={handleSelect} className={styles.select} isMulti/>
    </div>
 </GridItem>
    <GridItem className={styles.card} area={'fourthleft'}>
    <h3 className={styles.h3h}><span>4.</span>Scope</h3> 
       <div className={styles.content}>
    <RadioGroup onChange={setSelectedValue} value={selectedValue}>
      <Stack direction='row'>
        <Radio value='Small'>Small</Radio>
        <Radio value='Medium'>Medium</Radio>
        <Radio value='Large'>Large</Radio>
      </Stack>
    </RadioGroup>
       </div>   
    </GridItem>

  <GridItem className={styles.card} area={'firstright'}>
    <Tooltip label='This is how prospective workers figure out what you need and why you’re great to work with!
Include your expectations about the task or deliverable, what you’re looking for in a work relationship, and anything unique about your task.'
bg='rgba(242, 116, 0, 1)' fontSize="sm" hasArrow placement="bottom-start"> <h3><span>5.</span>Description</h3> </Tooltip> 
        <div className={styles.content}>    
    <input type="text" required value={description} onChange={(e)=>{setDescription(e.target.value)}} className={styles.firstrow}/>
        </div>
  </GridItem>
<GridItem className={styles.card} area={'secondright'}>
    <h3 className={styles.h3h}><span>6.</span>The pay you offer for the job</h3> 
    <div className={styles.content}>
    <span>KSH.<input type="number" onChange={(e)=>{setPay(e.target.value)}} value={pay} required/></span>
    </div>
  </GridItem>
 <GridItem className={styles.card} area={'thirdright'}>
    <h3 className={styles.h3h}><span>7.</span>The number of worker/workers required to perform the job</h3> 
    <div className={styles.content}>
    <span><input type="number" onChange={(e)=>{setNum(e.target.value)}} value={numofworkers} required/></span>
    </div>
  </GridItem>
  <GridItem area={'fourthright'} className={styles.fourthRight}>
   <button type="submit" onClick={submit}>Post</button>
  </GridItem>
  </Grid>
  </div> 
</>  
   )
}