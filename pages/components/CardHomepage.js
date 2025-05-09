import { Card, CardBody,CardFooter,Stack,Heading,Text,Center} from '@chakra-ui/react'
import Image from 'next/image'

export default function CardHomepage({name,testimonial,imagelink }) {
  const styles_Image={
    borderRadius:"5px",
    height:"100%",
    width:"100%",
    objectFit:"cover",
    backgroundOrigin:"center",
    backgroundPosition:"center"
  }
  const styles_div={
    height:"120px",
    width:"150px",
    marginTop:".1em",
    marginBottom:".05em",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginLeft:"5%"
  }
    return(
       
        <Card minH={350} minW={200} maxW={200} borderRadius="5px" boxShadow='lg' bg='wheat' style={{display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0}} >
  <CardBody>
   <Stack  spacing='1' >
        <Heading size='sm' style={{marginRight:"20%"}}>{name}</Heading>
        <div style={styles_div} > 
            <Image src={imagelink} alt="testimonial" style={styles_Image} />
            </div>
    </Stack>
  </CardBody>
  <CardFooter>
    
  <Text color="green" fontSize='sm' fontWeight={300} textAlign="center" >
        {testimonial}
      </Text>
    
    </CardFooter>

</Card>
       
    )
}