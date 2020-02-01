import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Loader.module.css';

const Loader1 = () => (
  <Loader
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000}
    className={style.Loader}
  />
);

export default Loader1;
