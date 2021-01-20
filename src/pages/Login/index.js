import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest, studentSignInRequest} from '../../store/modules/auth/actions';

import EscolaOnline from '../../assets/images/EscolaOnline.png';
import { Container } from './styles';

const schema = Yup.object().shape({
    email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
    const getUrlParameter = (name) => {
        name = name.replace(/[\\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        let results = regex.exec(window.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };    

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    const studentID = getUrlParameter('id');
    if (studentID>0) {
        dispatch(studentSignInRequest(studentID))
    }

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }

    return (
        <Container>
            <img src={EscolaOnline} alt="logo"/>
            
            <Form schema={schema} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <Input name="email" type="email" placeholder="Seu e-mail" style={{ height: '4vh', marginTop: '1vh',
                padding: '0 3vh', border: '0', borderRadius: '5px', color: '#3a3a3a'}}/>
                <h2>Senha</h2>
                <Input name="password" type="password" placeholder="Sua senha" style={{ height: '4vh', marginTop: '1vh',
                padding: '0 3vh', border: '0', borderRadius: '5px', color: '#3a3a3a'}} />

                <div>
                    <button type="submit" style={{height: '5vh',marginTop: '1vh',width: '10vw',borderRadius: '1vh',
                    border: '0', background: '#002360', color: '#fff', fontSize: '2.5vh', fontWeight: 'bold',
                    transition: 'background-color 0.2s'}}>
                        {loading ? 'Carregando...' : 'Acessar'}
                    </button>
                </div>
                <p>Não tem conta? <Link to="/register">Cadastre-se</Link></p>
            </Form>
        </Container>
    )
}