
import React from 'react';
import HeaderData from '../../constants/header.constant';
import MainHeaderList from './MainHeaderList';

function Header() {

  console.log("HeaderData",HeaderData);

  return (
    <div>
       <MainHeaderList  list={HeaderData}/>
    </div>
  );
}

export default Header;