import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../store/Auth-context';
import { useHistory } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {

  const authctx = useContext(AuthContext);
  const isLoggedIn = authctx.isLoggedIn;
  console.log(isLoggedIn)
  const history = useHistory();

  const logoutHandler =()=>{
    authctx.logout();
    history.replace('/');
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (<li>
            <Link to='/auth'>Login</Link>
          </li>)}
          {isLoggedIn &&(<li>
            <Link to='/profile'>Profile</Link>
          </li>)}
          {isLoggedIn && (<li>
            <button onClick={logoutHandler}>Logout</button>
          </li>)}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
