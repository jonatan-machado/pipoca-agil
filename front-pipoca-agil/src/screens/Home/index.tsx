import React from 'react';

import {
  Container, 
  Main, 
  MainContent, 
  MainContentLeft, 
  MainContentRight,
  PersonArea,
  ImgFundo,
  PersonImg
} from './styles'
import { NaVBar } from '../../components/Nav';
import { Heade } from '../../components/Header';
import { SocialBar } from '../../components/SocialBar';
import { Button } from '../../components/Button';

export function Home() {
  return(
  <>
   
    <Container>
      <Heade />
      <NaVBar />
      <SocialBar />

      <Main>
        <MainContent>
          <MainContentLeft>
          <h1>O Podcast mais animado do Mundo Ágil</h1>
          <p>Cadastre-se no clube de assinantes e tenha acesso a todos os conteúdos exclusivos do mundo da tecnologia.</p>
          <Button title='Cadastra-se'/>
          <h5>Já possui conta? Entre aqui</h5>
          </MainContentLeft>
          <MainContentRight>
            <PersonArea>
              <ImgFundo>
                <PersonImg />
              </ImgFundo>
            </PersonArea>
          </MainContentRight>
          
        </MainContent>
      </Main>

    </Container>
    
  </>  
  )
}