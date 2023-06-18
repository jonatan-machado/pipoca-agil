import React from 'react'

import IconYoutube from '../../assets/icon 3.png'
import IconFacebook from '../../assets/icon 4.png'

import IconInstagram from '../../assets/icon 2.png'
import IconTwitter from '../../assets/icon 1.png'


import {
  Container, 
  SocialBarMdiaContainer, 
  SocialBarIconsMedia, 
  PayMeCoffe,
  CoffeIcon

} from './styles'

export function SocialBar() {
  return(
    <Container>
      <SocialBarMdiaContainer>
        <SocialBarIconsMedia>
            <ul>
              <li>
                <a href="http://">
                  <img src={IconFacebook} />
                </a>
              </li>
              <li>
                <a href="http://">
                  <img src={IconYoutube} />
                </a>
              </li>
              <li>
                <a href="http://">
                  <img src={IconInstagram} />
                </a>
              </li>
              <li>
                <a href="http://">
                  <img src={IconTwitter} />
                </a>
              </li>
            </ul>
        </SocialBarIconsMedia>
        <PayMeCoffe>
          <ul>
            <li><a href="http://">Me page um cafe</a></li>
            <CoffeIcon />
          </ul>
        </PayMeCoffe>
      </SocialBarMdiaContainer>
    </Container>
  )
}