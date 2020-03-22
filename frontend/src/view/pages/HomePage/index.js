import React, { Component, useState } from 'react';
import { withRouter, Route }          from 'react-router';
import styles                         from './HomePage.module.scss';
import Navigation                     from '../../components/Navigation';
import withAppContext                 from '../../components/HoCs/withAppContext.js';
import { getUsers }                   from "../../../api/admin.js";
import store                          from '../../../redux/store'

const HomePage = () => {


  /*//своцства класса
  this.props;
  this.state;
  this.context;

  //методы экзмепляра
  this.setState();
  this.forceUpdate()*/

  return (
    <>
      <Navigation/>
      <h1>{JSON.stringify( store, null, 4 )}</h1>

      <button onClick={() => {
        getUsers()

      }}>
        GET IT!
      </button>

    </>
  );

}

export default withRouter( HomePage );