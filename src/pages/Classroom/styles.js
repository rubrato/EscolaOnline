import styled, { css } from 'styled-components';

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

export const Question = styled.div`
    width: 20vw;
    margin-left: 2vw;

    text-align: center;
    margin-top: 60%;

    fieldset {
        :disabled {
            button {
                background: #383838;
                opacity: 0.7;
            }
        }
    }
`;

export const Info = styled.div`
    margin-top: 4vh;
    margin-left: 2vw;

    h2 {
        margin-top: 1vh;
    }
`;

export const AnswerButton = styled.button`
    width: 20vw;
    height: 30px;
    margin-top: 20px;
    font-size: 18px;

    background: #3163b7;
    color: #fff;

    padding: 0 24px;
    border: 0;
    border-radius: 5px;

    ${(props) =>
    props.isSelected &&
    css`
        border: 4px solid;
        border-color: #3163b7;
    `}
`;