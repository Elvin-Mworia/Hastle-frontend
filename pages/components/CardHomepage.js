import { Card, CardBody,CardFooter,Stack,Heading,Text,Center} from '@chakra-ui/react'
import Image from 'next/image'
export default function CardHomepage({name,testimonial,imagelink }) {
    return(
        <>
        <Card minH={350} minW={250} maxW={250} borderRadius="5px" boxShadow='lg' bg='wheat' style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
  <CardBody>
  
    <Stack  spacing='1' >
        <Heading size='sm'>{name}</Heading>
        <div style={{height:"150px",width:"150px",marginTop:".1em",marginBottom:".05em",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginLeft:"10%",marginRight:"10%"}} >   <Image
      src={imagelink}
      alt="testimonial"
     style={{borderRadius:"5px",height:"100%",width:"100%",objectFit:"cover",backgroundOrigin:"center",backgroundPosition:"center"}}
    /></div>

    </Stack>
  </CardBody>
  <CardFooter>
    
  <Text color="black" fontSize='sm' fontWeight={700} textAlign="center" style={{marginLeft:"10%"}}>
        {testimonial}
      </Text>
     
    </CardFooter>

</Card>
        </>
    )
}