import styled from 'styled-components';

import Icon from '../../../src/assets/Vector.png'

export const Container = styled.div`
   width: 100vw;
`;
export const NavBarContainer = styled.div`
  width: 100vw;
  background-color: ${({theme}) => theme.colors.btnPrimary};
  height: 4rem;
  display: flex;
  
`;

export const NavBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  margin-left: 3.5rem;
  margin-right: 5rem;
`;

export const NavBarLeft = styled.div`
  ul {
  display: flex;
  text-decoration: none;
  list-style: none;
  }
  li {
    margin-left: 2rem;
    
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const NavBarRight = styled.div`
  display: flex;
  align-items: center;
   ul {
  display: flex;
  text-decoration: none;
  list-style: none;
  align-items: center;
  
  }
  li {
    margin-left: 2rem;
    
  }
  a {
    color: ${({theme}) => theme.colors.textBold};
    text-decoration: none;
  }
  
`;
export const IconPng = styled.image`
  background-color: red;
  background: url(${Icon});
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 1rem;
`
