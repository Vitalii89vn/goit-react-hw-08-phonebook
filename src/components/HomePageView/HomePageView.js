 import { Container} from '@chakra-ui/react'
import greeting from 'img/Greeting.jpg'

export const HomePageView = () => {
    return (
        <Container display="flex" justifyContent='center' alignItems='center' flexDirection='column'>
            <h1>Greetings for your contacts book</h1>
            <img src={greeting} alt="Greeting_image" width='70%'/>
        </Container>
     )
 }