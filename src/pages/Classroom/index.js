import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import socketio from 'socket.io-client';
import { useSelector } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';

import { Jutsu } from 'react-jutsu'

import { store } from '../../store';

import backImg from '../../assets/images/back.png';
import alunoImg from '../../assets/images/aluno.png';
import rightAnswer from '../../assets/gifs/rightanswer.gif';

import { Container, Header, HeaderContent, Content, Form, AnswerButton } from './styles';

const Classroom = () => {
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
  const [wNewQuestion, setWNewQuestion] = useState(false);

  const [bOneChecked, setBOneChecked] = useState(true);
  const [bTwoChecked, setBTwoChecked] = useState(false);
  const [bThreeChecked, setBThreeChecked] = useState(false);
  const [bFourChecked, setBFourChecked] = useState(false);
  const [answered, setAnswered] = useState({});

  const [right, setRight] = useState([]);
  const [wrong, setwrong] = useState([]);

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
      setWNewQuestion(false);
      setAnswered({answered:false});
    }

    const handleSetNewAnswer = (right, wrong) => {
      setRight(right);
      setwrong(wrong)
    }

    socket.on('question', handleNewQuestion);

    socket.on('answer', handleSetNewAnswer);
    
    socket.on('showAnswer', () => {
      if (answered.answered){
        if (answered.answer){
          setWNewQuestion(true);
          setTimeout(setWNewQuestion, 3000, false);
        }
      }
      setTimeout(setQuestion, 3000, {});
      setAnswered({})
    });

    return () => socket.off('question', handleNewQuestion);

  }, [socket, question, totalOfStudents, wNewQuestion, answered])

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

  const handleAnswerOne = () => {
    socket.emit('sendAnswer', {answer:question.answers[0].right, name: userName});
    //setQuestion({});
    //setWNewQuestion(true);
    setAnswered({answered:true, answer:question.answers[0].right});
  }
  const handleAnswerTwo = () => {
    socket.emit('sendAnswer', {answer:question.answers[1].right, name: userName});
    setAnswered({answered:true, answer:question.answers[1].right});
  }
  const handleAnswerThree = () => {
    socket.emit('sendAnswer', {answer:question.answers[2].right, name: userName});
    setAnswered({answered:true, answer:question.answers[2].right});
  }
  const handleAnswerFour = () => {
    socket.emit('sendAnswer', {answer:question.answers[3].right, name: userName});
    setAnswered({answered:true, answer:question.answers[3].right});
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
                      <h1>Criar pergunta</h1>
                      <input
                          className="question"
                          onChange={handleInputOneChange}
                          placeholder="Pergunta"
                          value={tQuestion}
                          style={{width: '20vw'}}
                      />
                      <div>
                        <input
                            className="answer"
                            placeholder="Resposta 1"
                            onChange={handleInputTwoChange}
                            value={tAnswer1}
                            style={{width: '20vw'}}
                        />
                        <Checkbox checked={bOneChecked} color="primary" onChange={handleSetBOneChecked} />
                      </div>
                      <div>
                        <input
                            className="answer"
                            placeholder="Resposta 2"
                            onChange={handleInputThreeChange}
                            value={tAnswer2}
                            style={{width: '20vw'}}
                        />
                        <Checkbox checked={bTwoChecked} color="primary" onChange={handleSetBTwoChecked} />
                      </div>
                      <div>
                        <input
                            className="answer"
                            placeholder="Resposta 3"
                            onChange={handleInputFourChange}
                            value={tAnswer3}
                            style={{width: '20vw'}}
                        />
                        <Checkbox checked={bThreeChecked} color="primary" onChange={handleSetBThreeChecked} />
                      </div>
                      <div>
                        <input
                            className="answer"
                            placeholder="Resposta 4"
                            onChange={handleInputFiveChange}
                            value={tAnswer4}
                            style={{width: '20vw'}}
                        />
                        <Checkbox checked={bFourChecked} color="primary" onChange={handleSetBFourChecked} />
                      </div>
                      </fieldset>
                      <button type='submit' onClick={handleFormSubmit}>{ sent ? 'Liberar respostas' : 'Enviar' }</button>
                  </Form> 
                  {question.question ? <div><h1>Alunos on-line: </h1><h1>{totalOfStudents}</h1></div> : null}
                  {question.question ? <div><h1>Respostas corretas: </h1><h1>{right.length}  </h1> <div>{right}</div> </div> : null}
                  {question.question ? <div><h1>Respostas incorretas: </h1><h1>{wrong.length} {wrong}</h1></div> : null}
                </div> :
              <div>
                { question.question ? 
                    <div>
                      <h1>{question.question}</h1>
                      <fieldset disabled={answered.answered}>
                      <AnswerButton type="button" onClick={handleAnswerOne}>{question.answers[0].answer}</AnswerButton>
                      <AnswerButton type="button" onClick={handleAnswerTwo}>{question.answers[1].answer}</AnswerButton>
                      <AnswerButton type="button" onClick={handleAnswerThree}>{question.answers[2].answer}</AnswerButton>
                      <AnswerButton type="button" onClick={handleAnswerFour}>{question.answers[3].answer}</AnswerButton>
                      </fieldset>
                    </div>

                 : null}
                 {wNewQuestion ? <img src={rightAnswer} alt="right answer"/> : null }
              </div>
            }
        </Content>
    </Container>
  )
}

export default Classroom;