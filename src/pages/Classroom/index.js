import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import socketio from 'socket.io-client';
import { useSelector } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';

import { Jutsu } from 'react-jutsu'

import { store } from '../../store';

import backImg from '../../assets/images/back.png';
import alunoImg from '../../assets/images/aluno.png';
import gifs from '../../assets/gifs/gifs.js'
import gifButtons from '../../assets/images/gifButtons.js'

import { Container, Header, HeaderContent, Content, Form, InputQuestion, AnswerButton, InputAnswer, Info, Question, GifButtons, GifDiv, GifButton } from './styles';

const Classroom = ({ isSelected }) => {
  const userName = store.getState().user.profile.name;
  const teacher = store.getState().user.profile.teacher;
  const [ question, setQuestion ] = useState({});
  const [sent, setSent] = useState(false);
  const [totalOfStudents, settotalOfStudents] = useState(0);

  const [tQuestion, updateTQuestion] = useState('');
  const [tAnswer1, updateTAnswer1] = useState('');
  const [tAnswer2, updateTAnswer2] = useState('');
  const [tAnswer3, updateTAnswer3] = useState('');
  const [tAnswer4, updateTAnswer4] = useState('');

  const [bOneChecked, setBOneChecked] = useState(true);
  const [bTwoChecked, setBTwoChecked] = useState(false);
  const [bThreeChecked, setBThreeChecked] = useState(false);
  const [bFourChecked, setBFourChecked] = useState(false);
  const [answered, setAnswered] = useState({});
  const [gif, setGif] = useState(0);

  const [right, setRight] = useState([]);
  const [wrong, setwrong] = useState([]);

  const [a1Selected, setA1Selected] = useState(false);
  const [a2Selected, setA2Selected] = useState(false);
  const [a3Selected, setA3Selected] = useState(false);
  const [a4Selected, setA4Selected] = useState(false);
  const [showingif, setShowingif] = useState (false);
  
  const user = useSelector(state => state.user.profile);

  const socket = useMemo(() => socketio('http://localhost:3333', {
    query: {
      user_id: user.id
    }
  }), [user.id]);

  useEffect(() => {
    const handleNewQuestion = (newQuestion, students)  =>{
      setQuestion(newQuestion);
      settotalOfStudents(students);
      setAnswered({answered:false});
    }

    const handleSetNewAnswer = (right, wrong) => {
      setRight(right);
      setwrong(wrong)
    }

    const handleGif = (gif) => {
      setGif(gif);
      setTimeout(setGif, 4000, 0);
  }

    socket.on('question', handleNewQuestion);

    socket.on('answer', handleSetNewAnswer);
    
    socket.on('showAnswer', () => {
      if (answered.answered){
        if (answered.answer){
          handleGif(1)
        } else{
          handleGif(2)
        }
      }
      setTimeout(setQuestion, 4000, {});
      setTimeout(setAnswered, 4000, {});
    });

    socket.on('receiveGif', handleGif);

    return () => socket.off('question', handleNewQuestion);

  }, [socket, question, totalOfStudents, answered])

  const handleFormSubmit = event => {
    //setQuestion({question : 'abc'})
    event.preventDefault();
    if (tQuestion && tAnswer1 && tAnswer2 && tAnswer3 && tAnswer4){
      if (!sent) {
      socket.emit('sendQuestion', {question : tQuestion, answers: 
        [{answer: tAnswer1, right: bOneChecked},
        {answer: tAnswer2, right : bTwoChecked},
        {answer: tAnswer3, right: bThreeChecked},
        {answer: tAnswer4, right: bFourChecked}]});
        setSent(true);
      } else {
        socket.emit('showAnswers')
        updateTQuestion('');
        updateTAnswer1('');
        updateTAnswer2('');
        updateTAnswer3('');
        updateTAnswer4('');
        setSent(false);
        setQuestion({});
        setRight([]);
        setwrong([]);
      }}
  }

  const handleSetBOneChecked = (event) => {
    setBOneChecked(event.target.checked);
  }
  const handleSetBTwoChecked = (event) => {
    setBTwoChecked(event.target.checked);
  }
  const handleSetBThreeChecked = (event) => {
    setBThreeChecked(event.target.checked);
  }
  const handleSetBFourChecked = (event) => {
    setBFourChecked(event.target.checked);
  }

  const handleInputOneChange = (event) => { 
    updateTQuestion(event.target.value)
  }
  const handleInputTwoChange = (event) => { 
    updateTAnswer1(event.target.value)
  }
  const handleInputThreeChange = (event) => { 
    updateTAnswer2(event.target.value)
  }
  const handleInputFourChange = (event) => { 
    updateTAnswer3(event.target.value)
  }
  const handleInputFiveChange = (event) => { 
    updateTAnswer4(event.target.value)
  }

  const handleAnswer = (resp) => event => {
    socket.emit('sendAnswer', {answer:question.answers[resp].right, name: userName});
    setAnswered({answered:true, answer:question.answers[resp].right});
    switch(resp) {
      case 0:
        setA1Selected(true);
        break;
      case 1:
        setA2Selected(true);
        break;
      case 2:
        setA3Selected(true);
        break;
      case 3:
        setA4Selected(true);
        break;
      default:
        console.log('que botão foi esse?')
  }}

  const handleGifButton= (index) => event =>{
    if (!showingif){
      setShowingif(true);
      socket.emit('sendGif', index);
      setTimeout(setShowingif, 4500, false);
    }

  }

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

        <Content>
            { teacher ? 
                  <Jutsu containerStyles={{ width: '65vw', height: '89vh' }}
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
                  <Jutsu containerStyles={{ width: '65vw', height: '90vh' }}
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
                { teacher ?
                    <div>
                        <Form className="form" onSubmit={handleFormSubmit}>
                          <fieldset disabled={sent}>
                          <InputQuestion
                              className="question"
                              onChange={handleInputOneChange}
                              placeholder="Faça uma pergunta"
                              value={tQuestion}
                          />
                          <table>
                            <tr>
                              <th></th>
                              <th><p>Marque a(s) resposta(s) correta(s)</p></th>
                            </tr>
                            <tr>
                              <th>
                                <InputAnswer
                                    className="answer"
                                    placeholder="Resposta 1"
                                    onChange={handleInputTwoChange}
                                    value={tAnswer1}
                                    style={{width: '20vw'}}
                                />
                              </th>
                              <th>
                                <Checkbox checked={bOneChecked} color="primary" onChange={handleSetBOneChecked} />  
                              </th>
                            </tr>
                            <tr>
                              <th>
                                <InputAnswer
                                    className="answer"
                                    placeholder="Resposta 2"
                                    onChange={handleInputThreeChange}
                                    value={tAnswer2}
                                    style={{width: '20vw'}}
                                />
                              </th>
                              <th>
                                <Checkbox checked={bTwoChecked} color="primary" onChange={handleSetBTwoChecked} />
                              </th>
                            </tr>
                            <tr>
                              <th>
                                <InputAnswer
                                    className="answer"
                                    placeholder="Resposta 3"
                                    onChange={handleInputFourChange}
                                    value={tAnswer3}
                                    style={{width: '20vw'}}
                                />
                              </th>
                              <th>
                                <Checkbox checked={bThreeChecked} color="primary" onChange={handleSetBThreeChecked} />
                              </th>
                            </tr>
                            <tr>
                              <th>
                                <InputAnswer
                                    className="answer"
                                    placeholder="Resposta 4"
                                    onChange={handleInputFiveChange}
                                    value={tAnswer4}
                                    style={{width: '20vw'}}
                                />
                              </th>
                              <th>
                                <Checkbox checked={bFourChecked} color="primary" onChange={handleSetBFourChecked} />
                              </th>
                            </tr>
                          </table>
                          </fieldset>

                          <button type='submit' onClick={handleFormSubmit}>{ sent ? 'Liberar respostas' : 'ENVIAR' }</button>
                      </Form>
                      <Info>
                        {/* {question.question ? <div><h2>Alunos on-line: {totalOfStudents}</h2></div> : null} */}
                        {question.question ? <div><h2>Respostas corretas: {right.length}</h2> {right} </div> : null}
                        {question.question ? <div><h2>Respostas incorretas: {wrong.length}</h2> {wrong} </div> : null}
                        <GifButtons>
                          <div>
                            <GifButton type="button" onClick={handleGifButton(3)}><img src={gifButtons[0]} alt="welcome" /></GifButton>
                            <p>Bem Vindos</p>
                          </div>
                          <div>
                            <GifButton type="button" onClick={handleGifButton(4)}><img src={gifButtons[1]} alt="breakfast" /></GifButton>
                            <p>Hora do Lanche</p>
                          </div>
                          <div>
                            <GifButton type="button" onClick={handleGifButton(5)}><img src={gifButtons[2]} alt="welldone" /></GifButton>
                            <p>Parabéns!</p>
                          </div>
                          <div>
                            <GifButton type="button" onClick={handleGifButton(6)}><img src={gifButtons[3]} alt="not this time" /></GifButton>
                            <p>Não foi dessa vez!</p>
                          </div>
                        
                          <div>
                            <GifButton type="button" onClick={handleGifButton(7)}><img src={gifButtons[4]} alt="important" /></GifButton>
                            <p>Atenção!!!</p>
                          </div>
                          <div>
                            <GifButton type="button" onClick={handleGifButton(8)}><img src={gifButtons[5]} alt="birthday" /></GifButton>
                            <p>Feliz Aniversário</p>
                          </div>
                          <div>
                            <GifButton type="button" onClick={handleGifButton(9)}><img src={gifButtons[6]} alt="question time" /></GifButton>
                            <p>Hora das perguntas</p>
                          </div>
                          <div>
                            <GifButton type="button" onClick={handleGifButton(10)}><img src={gifButtons[7]} alt="bye" /></GifButton>
                            <p>Até a próxima!</p>
                          </div>
                        </GifButtons>
                      </Info>
                      {gif ? <GifDiv><img src={gifs[gif]} alt="GIF time!"/> </GifDiv>: null}
                    </div> :
                  <div>
                    { question.question ? 
                        <Question>
                          <h1>{question.question}</h1>
                          <fieldset disabled={answered.answered} style={{'display': 'flex', 'flex-direction': 'column', 'align-items': 'center'}}>
                            <AnswerButton type="button" isSelected={a1Selected} onClick={handleAnswer(0)}>{question.answers[0].answer}</AnswerButton>
                            <AnswerButton type="button" isSelected={a2Selected} onClick={handleAnswer(1)}>{question.answers[1].answer}</AnswerButton>
                            <AnswerButton type="button" isSelected={a3Selected} onClick={handleAnswer(2)}>{question.answers[2].answer}</AnswerButton>
                            <AnswerButton type="button" isSelected={a4Selected} onClick={handleAnswer(3)}>{question.answers[3].answer}</AnswerButton>
                          </fieldset>
                        </Question>

                    : null}
                    {gif ? <GifDiv><img src={gifs[gif]} alt="GIF time!"/> </GifDiv> : null}
                  </div>
                }
        </Content>
    </Container>
  )
}

export default Classroom;