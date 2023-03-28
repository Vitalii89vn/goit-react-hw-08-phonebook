import { Button } from '@chakra-ui/react';

export const CustomButton = ({ children }) => {
    return (
        <Button
            variant='solid'
            borderRadius='5'
            padding='5'
            bg='#1515a0'
            color='white'
            _hover={{ bg: '#4e4eeb', color: "black" }}
            _focus={{ bg: '#4e4eeb', color: "black" }}
            boxShadow='0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
        >{children}</Button>
    )
};
