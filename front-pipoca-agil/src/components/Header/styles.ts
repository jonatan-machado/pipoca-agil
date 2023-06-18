import styled from 'styled-components';

import topBanner from '../../assets/banner1.png'
import logoImg from '../../assets/logo.png'

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.btnPrimary};
  width: 100vw;
`;
export const Header = styled.div`
  max-width: 100vw;
  width: 100vw;
  height: 17rem;
  margin: 0 auto;
  background-size: cover;
  background:url(${topBanner});
  background-position-x: left;
  
`;
export const Logo = styled.div`
  background-size: contain;
  background:url(${logoImg});
  width: 20rem;
  height: 20rem;
`