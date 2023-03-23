 import greeting from 'img/Greeting.jpg'

export const HomePageView = () => {
    return (
        <>
            <h1>Greetings for your contacts book</h1>
            <img src={greeting} alt="Greeting_image" width='200' height='300'/>
        </>
     )
 }