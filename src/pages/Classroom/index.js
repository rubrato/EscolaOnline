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
            <Link to="/">
              <img src={backImg} alt="back"></img>
            </Link>
            
            <h1>Aula</h1>

            <img src={alunoImg} alt="aluno"></img>
          </HeaderContent>
        </Header>

        {/* professor */}
        <Content> 
          <Jutsu containerStyles={{ width: '90vw', height: '85vh' }}
            roomName="sala_de_aula002"
            onMeetingEnd={() => console.log('Meeting has ended')}
            loadingComponent={<p>loading ...</p>}
            errorComponent={<p>Oops, something went wrong</p>}
            configOverwrite = {{ startWithVideoMuted : "true",
            prejoinPageEnabled : false
            }}
            interfaceConfigOverwrite = {{
              TOOLBAR_BUTTONS: ['microphone', 'camera', 'desktop',
              'fodeviceselection', 'chat', 'recording',
              'sharedvideo', 'settings', 'raisehand', 'videoquality', 'shortcuts',
              'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone'],
              SETTINGS_SECTIONS: ["devices","language", 'moderator'],
              TOOLBAR_ALWAYS_VISIBLE: true,
              INITIAL_TOOLBAR_TIMEOUT: 999999999,
              TOOLBAR_TIMEOUT: 999999999,
              SHOW_CHROME_EXTENSION_BANNER: false,
              SHOW_POWERED_BY: false,
              VIDEO_QUALITY_LABEL_DISABLED: true,
              HIDE_INVITE_MORE_HEADER: true,
            }}
          />
        </Content>
        
        {/* Aluno */}
        {/* <Content>
          <Jutsu containerStyles={{ width: '90vw', height: '90vh' }}
            roomName="sala_de_aula002"
            onMeetingEnd={() => console.log('Meeting has ended')}
            loadingComponent={<p>loading ...</p>}
            errorComponent={<p>Oops, something went wrong</p>}
            configOverwrite = {{ startWithVideoMuted : "true",
            prejoinPageEnabled : false
            }}
            interfaceConfigOverwrite = {{
              TOOLBAR_BUTTONS: ['tileview','raisehand','chat',"microphone","camera","desktop","settings"],
              SETTINGS_SECTIONS: ["devices","language"],
              TOOLBAR_ALWAYS_VISIBLE: true,
              INITIAL_TOOLBAR_TIMEOUT: 999999999,
              TOOLBAR_TIMEOUT: 999999999,
              SHOW_CHROME_EXTENSION_BANNER: false,
              SHOW_POWERED_BY: false,
              VIDEO_QUALITY_LABEL_DISABLED: true,
              HIDE_INVITE_MORE_HEADER: true,
            }}
          />
        </Content> */}
    </Container>
  )
}

export default Classroom;