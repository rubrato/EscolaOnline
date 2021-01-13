import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import alunoImg from '../../assets/images/aluno.png';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Header, HeaderContent, Content } from './styles';

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
                <div>
                <table>
                    <tr>
                        <th></th>
                        <th>Segunda-feira</th>
                        <th>Terça-feira</th>
                        <th>Quarta-feira</th>
                        <th>Quinta-feira</th>
                        <th>Sexta-feira</th>
                    </tr>
                    <tr>
                        <th>07:00 as 08:00</th>
                        <th></th>
                        <Link to="/classroom">
                            <th style={{background: "#33a242", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                Aula de hoje
                            </th>
                        </Link>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>08:05 às 09:10</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>09:45 às 10:05</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>10:05 às 11:10</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                        </th>
                    </tr>
                </table>
                </div>
            </Content>

        </Container>
    )
}

export default Dashboard;