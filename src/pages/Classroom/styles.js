import styled from 'styled-components';

import background from '../../assets/images/background_classroom.png';

export const Container = styled.div`
    background: #F0F0F5 url(${background}) no-repeat center center;
    height: 100vh;

    -webkit-background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    -o-background-size: 100% 100%;
    background-size: 100% 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    fieldset {
        border: none;
    }
`;

export const Header = styled.div`
    background: #fff;
    height: 60px;
    width: 100%;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;

    a, h1 {
        background: transparent;
        border: 0;
        font-weight: bold;
        color: #1d3b6c;
        font-size: 30px;
        margin-left: 20px;
    }

    img {
        margin-left: auto;
        margin-right: 20px;
        padding-top: 5px;
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }
`;

export const Content = styled.div`
    margin-top: 2vh;
    display: flex;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    width: 30vw;
    margin-left: 24px;

    div {
        width: 100%;
    }

    button {
        height: 30px;
        margin-top: 14px;
        width: 20vw;

        border-radius: 5px;
        border: 0;
        background: #002360;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
    }

    p {
        margin-top: 6px;
        font-size: 12px;
    }
`;

export const AnswerButton = styled.button`
    width: 20vw;
    height: 30px;
    margin-top: 20px;
    font-size: 18px;

    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
    :disabled{
        background:blue;

        :isselected{
            border:5px;
            background:red;
            width: 20vw;
            height: 30px;
            margin-top: 20px;
            font-size: 28px;
            padding: 0 24px;
            border-radius: 15px;
            color: #3a3a3a; 
        }
    }
`;


export const InputQuestion = styled.input`
    margin-top: 10px;
    align-self: center;
    height: 50px;
    width: 30vw;

    border: 0;
    border-radius: 5px;
    color: #3a3a3a;

    text-align: center;

    ::-webkit-input-placeholder {
        text-align: center;
    }

    :-moz-placeholder { /* Firefox 18- */
    text-align: center;  
    }

    ::-moz-placeholder {  /* Firefox 19+ */
    text-align: center;  
    }

    :-ms-input-placeholder {  
    text-align: center; 
    }
    :disabled{
        background: green;
    }
`;

export const DivS = styled.div`
    height: 30px;
    margin-top: 5px;

    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
`;

export const InputAnswer = styled.input`
    height: 30px;
    margin-top: 5px;

    padding: 0 24px;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
`;