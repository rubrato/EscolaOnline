import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import { signUpRequest } from '../../store/modules/auth/actions';
import { Container } from './styles';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter 6 caracteres').required('A senha é obrigatória'),
});

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({name, email, password}) {
        dispatch(signUpRequest(name, email, password));
    }

    return (
        <Container>

            <Form schema={schema} onSubmit={handleSubmit} style={{display: 'flex', width: '20vw', height: '100vh',
                flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'center'}}>
                <h2>Nome</h2>  
                <Input name="name" type="name" placeholder="Nome completo" style={{ height: '5vh', marginTop: '1vh',
                padding: '0 3vh', border: '0', borderRadius: '5px', color: '#3a3a3a'}}/>
                <h2>E-mail</h2>
                <Input name="email" type="email" placeholder="Seu e-mail" style={{ height: '5vh', marginTop: '1vh',
                padding: '0 3vh', border: '0', borderRadius: '5px', color: '#3a3a3a'}}/>
                <h2>Senha</h2>
                <Input name="password" type="password" placeholder="Sua senha" style={{ height: '5vh', marginTop: '1vh',
                padding: '0 3vh', border: '0', borderRadius: '5px', color: '#3a3a3a'}}/>
                <div>   
                    <button type="submit" style={{height: '6vh',marginTop: '2vh',width: '20vw',borderRadius: '5px',
                        border: '0', background: '#002360', color: '#fff', fontSize: '4vh', fontWeight: 'bold',
                        transition: 'background-color 0.2s'}}>Criar conta</button>
                </div>
                <Link to="/">Já tenho login</Link>
                
            </Form>
        </Container>
    )
}