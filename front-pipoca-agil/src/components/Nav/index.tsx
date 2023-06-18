import React from 'react';

import {NavBarContainer, NavBarContent, NavBarLeft, NavBarRight, IconPng} from './styles'

export function NaVBar() {
  return(
    <NavBarContainer>
      <NavBarContent>
        <NavBarLeft>
          <ul>
            <li><a href="http://">inicio</a></li>
            <li><a href="http://">projeto</a></li>
            <li><a href="http://">bio</a></li>
            <li><a href="http://">livros</a></li>
            <li><a href="http://">contatos</a></li>
          </ul>
        </NavBarLeft>
        <NavBarRight>
          <ul>
            <li><a href="#">Ao Vivo</a></li>
            <IconPng />
          </ul>
        </NavBarRight>
      </NavBarContent>
    </NavBarContainer>
  )
}