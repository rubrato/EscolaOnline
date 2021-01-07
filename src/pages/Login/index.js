import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest, studentSignInRequest} from '../../store/modules/auth/actions';

import alunoPng from '../../assets/images/aluno.png';

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
        <>
            <img src={alunoPng} alt="logo"/>
            
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input name="password" type="password" placeholder="Sua senha" />

                <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
                <Link to="/register">Crie sua conta</Link>
            </Form>
        </>
    )
}