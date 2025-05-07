import { Card, CardBody,Stack,Heading,Text} from '@chakra-ui/react'
import Image from 'next/image'
export default function CardHomepage({name,testimonial,imagelink }) {
    return(
        <>
        <Card minH={300} minW={250} borderRadius="5px" boxShadow='lg' bg='wheat' >
  <CardBody>
  
    <Stack  spacing='2' >
        <Heading size='sm'>{name}</Heading>
        <Image
      src={imagelink}
      alt="testimonial"
      height={350}
      width={300}
     style={{borderRadius:"5px",marginTop:"10px"}}
    />
      <Text color="black" fontSize='sm' fontWeight={700} textAlign="center">
        {testimonial}
      </Text>
    </Stack>
  </CardBody>

</Card>
        </>
    )
}