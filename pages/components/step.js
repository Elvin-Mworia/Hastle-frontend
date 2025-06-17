import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box
} from '@chakra-ui/react'
import styles from '../../styles/clientdash.module.scss'
import svg1 from "../../public/image6.svg";
import svg2 from "../../public/image7.svg";
import svg3 from "../../public/image8.svg";
import svg4 from "../../public/image9.svg";
import Image from "next/image";

const steps = [
  { title: 'Post a Job in the application',image:svg1, description: 'Provide enough detail for great workers to figure out if the  work is right for them.(You can always edit your post)' },
  { title: 'Get a Proposal/Request from an expert.',image:svg2, description: 'A strong working relationship starts with open communication. Here&apos;s your chance to ask about experience, set expectations for what you need, and discuss terms of the work.' },
  { title: 'Start working Together.',image:svg3, description: 'Once you both agree on terms, collaborate with simple and secure tools like our chat system, the worker is sent the location of your task premises. Exchanging your contacts is upto you but it&apos;s encouraged for flexible communication.' },
  {title:'Pay the expert on the agreed terms',image:svg4,description:'Once the worker has finished the job and you are satisfied pay them on the agreed amount. Failure to which they have a right to report you on the plartform and be banned.'}
]

export default function ClientStepper() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <Stepper  orientation='vertical' mt={2} size='md' >
      {steps.map((step, index) => (
        <Step key={index} mb={2}>
          <StepIndicator className={styles.stepIndicator} >
            {/* <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            /> */}
           <Image className={styles.image} src={step.image} height={50} width={50} alt="Step 3" />
          </StepIndicator>

          <Box flexShrink='0' className={styles.steps}>
            <div className={styles.stepContent}>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription className={styles.stepDescription}>{step.description}</StepDescription>
            </div>

          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
}


