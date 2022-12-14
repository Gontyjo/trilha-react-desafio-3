import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Rodrigo Gontyjo" image="https://cdn.discordapp.com/attachments/828475549939662848/1042835054616903690/WhatsApp_Image_2022-11-17_at_13.13.56.jpeg" percentual={25}/>
                <UserInfo nome="Rodrigo Gontyjo" image="https://cdn.discordapp.com/attachments/828475549939662848/1042835054616903690/WhatsApp_Image_2022-11-17_at_13.13.56.jpeg" percentual={65}/>
                <UserInfo nome="Rodrigo Gontyjo" image="https://cdn.discordapp.com/attachments/828475549939662848/1042835054616903690/WhatsApp_Image_2022-11-17_at_13.13.56.jpeg" percentual={45}/>
                <UserInfo nome="Rodrigo Gontyjo" image="https://cdn.discordapp.com/attachments/828475549939662848/1042835054616903690/WhatsApp_Image_2022-11-17_at_13.13.56.jpeg" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
