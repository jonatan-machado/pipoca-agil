import styled from 'styled-components';

import FundoPerson from '../../assets/fundobranco1.png'
import Person from '../../assets/eu1.png'
export const Container = styled.div`
  width: 100vw;
  
`;

export const Main = styled.div`
  width: 100vw;
  display: flex;
  
`;


export const MainContent = styled.div`
    max-width: 1440px;
    width: 87vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    
`;
export const MainContentLeft = styled.div`
  width: 50vw;
  align-self: center;
  margin-top: 0.5rem;
  padding: 4rem;
h1{
  font-size: 1.5rem;
  font-weight: 700;
}
p {
  width: 45vw;
  font-size: 20px;
  font-weight: normal;
  margin-top: 1rem;
}
h5 {
  font-size: 14px;
  text-decoration: underline;
  font-weight: 400;
}
`;

export const MainContentRight = styled.div`
  width: 50vw;
  margin-top: 0.5rem;  
  
`;
export const PersonArea = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 30rem;
    height: 26rem;
    
`;
export const ImgFundo = styled.div`
  background-size: cover;
  background:url(${FundoPerson});
  background-position-x: left;
  width:25rem;
  height: 26rem;
  display: flex;
  align-items: center;
`;

export const PersonImg = styled.div`
  width: 30rem;
  height: 26rem;
  background-size: cover;
  background:url(${Person});
  background-position-x: left;
  background-repeat: no-repeat;
  background-position: left;
  background-position: 50%;
`