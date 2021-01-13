import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import socketio from 'socket.io-client';
import { useSelector } from 'react-redux';

import { Jutsu } from 'react-jutsu'

import { store } from '../../store';

import backImg from '../../assets/images/back.png';
import alunoImg from '../../assets/images/aluno.png';
import {Container, Header, HeaderContent, Content} from './styles';



const Classroom = () => {
  const userName = store.getState().user.profile.name;
  const teacher = store.getState().user.profile.teacher;
  const [ question, setQuestion ] = useState({});
  const [ tQuestion, updateTQuestion] = useState('');
  const [ tAnswer1, updateTAnswer1] = useState('');
  const [ tAnswer2, updateTAnswer2] = useState('');
  const [ tAnswer3, updateTAnswer3] = useState('');
  const [ tAnswer4, updateTAnswer4] = useState('');

  const user = useSelector(state => state.user.profile);

  const socket = useMemo(() => socketio('http://localhost:3333', {
    query: {
      user_id: user.id
    }
  }), [user.id]);

  useEffect(() => {
    const handleNewQuestion = newQuestion=>{
      setQuestion(newQuestion);
    }
    socket.on('question', handleNewQuestion);
    return () => socket.off('question', handleNewQuestion);

  }, [socket, question])

  const handleFormSubmit = event => {
    //setQuestion({question : 'abc'})
    socket.emit('sendQuestion', {question : tQuestion, answers: 
      [{a1: tAnswer1, right: false},
      {a2: tAnswer2, right : true},
      {a3: tAnswer3, right: false},
      {a4: tAnswer4, right: false}]});
      updateTQuestion('');
      updateTAnswer1('');
      updateTAnswer2('');
      updateTAnswer3('');
      updateTAnswer4('');
  }

  const handleInputChange = event =>
    updateTQuestion(event.target.value)
  
  console.log(userName);
  console.log(question);

  return (
      <div>
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

        <Content>
        { teacher ? 
              <Jutsu containerStyles={{ width: '90vw', height: '85vh' }}
                roomName="sala_de_aula002"
                displayName={userName}
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
                  MOBILE_APP_PROMO: false,
                  SHOW_CHROME_EXTENSION_BANNER: false,
                  SHOW_POWERED_BY: false,
                  VIDEO_QUALITY_LABEL_DISABLED: true,
                  HIDE_INVITE_MORE_HEADER: true,
                  }}
              />
          :
              <Jutsu containerStyles={{ width: '90vw', height: '90vh' }}
                roomName="sala_de_aula002"
                displayName={userName}
                onMeetingEnd={() => console.log('Meeting has ended')}
                loadingComponent={<p>loading ...</p>}
                errorComponent={<p>Oops, something went wrong</p>}
                configOverwrite = {{ startWithVideoMuted : "true",
                prejoinPageEnabled : false
                }}
                interfaceConfigOverwrite = {{
                  TOOLBAR_BUTTONS: ['tileview','raisehand','chat',"microphone","camera","settings"],
                  SETTINGS_SECTIONS: ["devices","language"],
                  TOOLBAR_ALWAYS_VISIBLE: true,
                  INITIAL_TOOLBAR_TIMEOUT: 999999999,
                  TOOLBAR_TIMEOUT: 999999999,
                  MOBILE_APP_PROMO: false,
                  SHOW_CHROME_EXTENSION_BANNER: false,
                  SHOW_POWERED_BY: false,
                  VIDEO_QUALITY_LABEL_DISABLED: true,
                  HIDE_INVITE_MORE_HEADER: true,
                }}
              />
            }
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    className="question"
                    onChange={handleInputChange}
                    placeholder="Pergunta"
                    type="text"
                    value={tQuestion}
                />
                <input
                    className="answer"
                    placeholder="Resposta 1"
                    type="text"
                    value={tAnswer1}
                />
                <input
                    className="answer"
                    placeholder="Resposta 2"
                    type="text"
                    value={tAnswer2}
                />
                <input
                    className="answer"
                    placeholder="Resposta 3"
                    type="text"
                    value={tAnswer3}
                />
                <input
                    className="answer"
                    placeholder="Resposta 3"
                    type="text"
                    value={tAnswer4}
                />
            </form>
            <button type='button' onClick={handleFormSubmit}>Clica</button>
        </Content>
    </Container>
      </div>
  )
}

export default Classroom;