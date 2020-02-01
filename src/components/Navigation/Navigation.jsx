import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes/routes';
import style from './Navigation.module.css';

const Navigation = () => (
  <ul className={style.nav_list}>
    <li>
      <NavLink
        exact
        activeClassName={style.active}
        className={style.nav_item}
        to={routes.HOME_PAGE.path}
      >
        Home page
      </NavLink>
    </li>
    <li>
      <NavLink
        activeClassName={style.active}
        className={style.nav_item}
        to={routes.MOVIES_PAGE.path}
      >
        Movie page
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
