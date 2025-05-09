import { Card, CardBody,CardFooter,Stack,Heading,Text,Center} from '@chakra-ui/react'
import Image from 'next/image'

export default function CardHomepage({name,testimonial,imagelink }) {
  const styles_Image={
    borderRadius:"5px",
    height:"100%",
    width:"100%",
    objectFit:"cover",
    backgroundOrigin:"center",
    backgroundPosition:"center",
    marginBottom:0,
  }
  const styles_div={
    height:"120px",
    width:"150px",
    marginTop:".1em",
    marginBottom:0,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginLeft:"5%"
  }
    return(
       
        <Card minH={280} minW={200} maxW={200} variant="outline" borderRadius="5px" boxShadow='lg' bg='#1A1A1A' style={{display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0,padding:0}} >
  <CardBody style={{marginBottom:0,marginTop:0}}>
   <Stack  spacing='1' >
        <Heading size='sm' style={{marginRight:"20%",marginBottom:0,color:"white"}}>{name}</Heading>
        <div style={styles_div} > 
            <Image src={imagelink} alt="testimonial" style={styles_Image} />
            </div>
            <Text style={{color:"#f27400",width:"80%",fontWeight:300}} fontSize='sm' fontWeight={300} textAlign="center" >
        {testimonial}
      </Text>
    </Stack>
  </CardBody>
</Card>
       
    )
}