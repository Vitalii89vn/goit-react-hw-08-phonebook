// import css from "./Filter.module.css"
import { useDispatch } from "react-redux";
import { updateFilter } from 'redux/filter/filterSlice'
import { DebounceInput } from 'react-debounce-input';
import { Container } from "@chakra-ui/react";

export const Filter = () => {
    const dispatch = useDispatch();
    const setFilter = (e) => {
        dispatch(updateFilter(e.target.value))
    };
  
    return (
        <Container maxW='70%' bg='blue.600' color='black' display='flex' flexDirection='column'>
            Find contacts by name
            <DebounceInput minLength={2}
                debounceTimeout={300}
                onChange={setFilter}
            ></DebounceInput></Container>
    )
};
