import React from 'react';
import { Link } from 'react-router-dom';

import { Jutsu } from 'react-jutsu'

import backImg from '../../assets/images/back.png';
import alunoImg from '../../assets/images/aluno.png';

import { Container, Header, HeaderContent, Content } from './styles';

const Classroom = () => {

  return (
    <Container>
          <Header>
          <HeaderContent>
            <Link to="/dashboard">
              <img src={backImg} alt="back"></img>
            </Link>
            
            <h1>Aula</h1>

            <img src={alunoImg} alt="aluno"></img>
          </HeaderContent>
        </Header>

        <Content>
          <Jutsu containerStyles={{ width: '90vw', height: '90vh' }}
            roomName="sala_de_aula002"
            onMeetingEnd={() => console.log('Meeting has ended')}
            loadingComponent={<p>loading ...</p>}
            errorComponent={<p>Oops, something went wrong</p>} 
          />
        </Content>
    </Container>
  )
}

export default Classroom;