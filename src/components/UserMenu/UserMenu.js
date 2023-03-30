import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        variant='solid'
        borderRadius='5'
        padding='5'
        bg='#5140ee'
        color='white'
        _hover={{ bg: '#4e4eeb', color: "black" }}
        _focus={{ bg: '#4e4eeb', color: "black" }}
        boxShadow='0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
        onClick={() => dispatch(logOut())}
      >Logout</Button>
    </div>
  );
};
