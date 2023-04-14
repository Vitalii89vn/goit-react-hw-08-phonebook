import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector} from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/filterSlice';
import { fetchContacts } from "redux/contacts/operations";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';


export const ContactList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(
        contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
        <ul>
            {visibleContacts.length > 0 && visibleContacts.map(({ id, name, number }) => (
                <ContactListItem
                    key={id}
                    id={id}
                    name={name}
                    phone={number}
                />
            ))}
        </ul>
    )
};
