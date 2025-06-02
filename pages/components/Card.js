import * as React from 'react';
import Link from "next/link"
import { Card, CardHeader, CardBody, CardFooter,Button,Stack,Text,Image,Heading } from '@chakra-ui/react'
import styles from "../../styles/card.module.scss";


export default function OutlinedCard({title,jobdescription,id }) {
  return (
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  className={styles.card}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
       {jobdescription}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Apply
      </Button>
    </CardFooter>
  </Stack>
</Card>
  );
}
