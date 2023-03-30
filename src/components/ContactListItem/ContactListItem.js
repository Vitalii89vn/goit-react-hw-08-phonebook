import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from "react-redux";
import { Container} from '@chakra-ui/react';
import css from './ContactListItem.module.css'
import { Button } from '@chakra-ui/react';


export const ContactListItem = ({ id, name, phone }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <Container
            maxW='70%'
            bg='#cdcdee'
            color='black'
            // border='2px solid black'
            boxShadow='0 0 1px 2px rgba(88, 144, 255, .75)'
            borderRadius='5'
            marginBottom='6'>
            <li className={css.contact}>
                <div className={css.contact_info}><span>{name}</span><span>{phone}</span></div>
                <Button
                    variant='solid'
                    borderRadius='5'
                    padding='5'
                    bg='#1515a0'
                    color='white'
                    _hover={{ bg: '#4e4eeb', color: "black" }}
                    _focus={{ bg: '#4e4eeb', color: "black" }}
                    boxShadow='0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
                    onClick={handleDelete}
                >Delete</Button>
            </li>
        </Container>
    )
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};