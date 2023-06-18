import styled from 'styled-components';

import Logo from '../../assets/logo.png'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const BoxForm = styled.div`
  background-color: ${({theme}) => theme.colors.backgroundColor};
  display: flex;
  height: 40rem;
  width: 31rem;
  margin: 2rem;
  border-radius: 0.5rem;
  justify-content: center;
`;
export const Img = styled.div`
  width: 16rem;
  height: 15rem; 
  background: url(${Logo});
  background-position: center;
  background-size: cover
  margin: 2rem;
`;