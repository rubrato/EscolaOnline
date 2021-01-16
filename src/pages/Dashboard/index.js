import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import alunoImg from '../../assets/images/aluno.png';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Header, HeaderContent, Content, Card } from './styles';

const Dashboard = () => {
    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <button type="button">Sobre nós</button>
                    <button type="button">Ajuda</button>

                    <img src={alunoImg} alt="aluno"></img>
                    <button type="button" onClick={handleSignOut}>Sair</button>
                </HeaderContent>
            </Header>

            <Content>
                <h1>Próximas Aulas</h1>
                <Link to="/classroom">
                <Card>
                    <div>
                        <p>20/01/2021</p>
                        <p>07:00 às 08:00</p>
                    </div>
                    <div>
                        <p>Tema da Aula: XXXXXXXXXX</p>
                        <p>Conteúdo da Aula</p>
                        <p>Tarefa: Responder isso</p>
                    </div>
                </Card>
                </Link>
            </Content>

        </Container>
    )
}

export default Dashboard;