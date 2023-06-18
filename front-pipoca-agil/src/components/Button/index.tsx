import React from 'react';

import {Container} from './styles'

type Props = {
  title: string; 
}

export function Button({title} : Props) {
  return(
    <Container>
      <a href="/signin">{title}</a>
    </Container>
  )
}