import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from "react-redux";
import { Container} from '@chakra-ui/react';
import css from './ContactListItem.module.css'
import {CustomButton} from '../Button/Button'


export const ContactListItem = ({ id, name, phone }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <Container
            maxW='70%'
            bg='#cdcdee'
            color='black'
            border='2px solid black'
            borderRadius='5'
            marginBottom='2'>
            <li className={css.contact}>
                <div className={css.contact_info}><span>{name}</span><span>{phone}</span></div>
                <CustomButton onClick={handleDelete}> Delete </CustomButton>
            </li>
        </Container>
    )
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};