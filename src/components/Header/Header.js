import React from 'react';
import Navigation from '../Navigation/Navigation';
import { WhiteHalf1, Title, BlueSquare, YellowSquare, PinkSquare } from './HeaderStyles';
import '../styles/Header.css';

function Header(props) {
  return ( 
    <WhiteHalf1>
      <Title>Amy's Portfolio</Title>
        <BlueSquare></BlueSquare>
        <YellowSquare></YellowSquare>
        <PinkSquare></PinkSquare>
        <Navigation currentPage = {props.currentPage} handlePageChange = {props.handlePageChange}/>
    </WhiteHalf1>
  )
}

export default Header;