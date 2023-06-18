import styled from 'styled-components';

export const Container = styled.div`
  width: 12.5rem;
  height: 5rem;
  background-color: ${({theme}) => theme.colors.btnPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.backgroundColor};
    font-size: 1.5rem;
  }
`;
