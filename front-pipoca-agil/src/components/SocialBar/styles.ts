import styled from 'styled-components';

import IconCoffe from '../../assets/café.png'

export const Container = styled.div`
  width: 100vw;
  border: 1px solid ${({theme}) => theme.colors.textBold};
  background-color: ${({theme}) => theme.colors.backgroundColor};
`;
export const SocialBarMdiaContainer = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin-left: 5rem;
  margin-right: 5rem;
  
`
export const SocialBarIconsMedia = styled.div`
  padding: 0.5rem;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    
  }
  a {
    text-decoration: none;
  }
  img {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 0.3rem;
    margin-right: 0.3rem;
  }
`;

export const PayMeCoffe = styled.div`
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
  

`
export const CoffeIcon = styled.div`
  background-color: red;
  background: url(${IconCoffe});
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 1rem;
  background-color: ${({theme}) => theme.colors.backgroundColor};
`;
