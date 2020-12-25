import React from 'react';
import { Link } from 'react-router-dom';

import alunoImg from '../../assets/images/aluno.png';

import { Container, Header, HeaderContent, Content } from './styles';

const Dashboard = () => {
    return (
        <Container>
            <Header>
                <HeaderContent>
                    <button type="button">Sobre nós</button>
                    <button type="button">Ajuda</button>

                    <img src={alunoImg} alt="aluno"></img>
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
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                    <tr>
                        <th>08:05 às 09:10</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                    <tr>
                        <th>09:45 às 10:05</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                    <tr>
                        <th>10:05 às 11:10</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>
                        <Link to="/classroom">
                            Aula
                        </Link>
                        </th>
                    </tr>
                </table>
                </div>
                <div><h1>teste</h1></div>
            </Content>

        </Container>
    )
}

export default Dashboard;