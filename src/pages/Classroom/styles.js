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
    height: 6.5vh;
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
        font-size: 6vh;
        margin-left: 1vw;
    }

    img {
        margin-left: auto;
        margin-right: 1vw;
        padding-top: 0.5vh;
        height: 5vh;
        border-radius: 50%;
    }
`;

export const Content = styled.div`
    margin-top: 2vh;
    display: flex;

    h1 {
        background: transparent;
        border: 0;
        font-weight: bold;
        color: #1d3b6c;
        font-size: 5vh;
        margin-bottom: 1vw;
    }
    p{
        background: transparent;
        border: 0;
        font-weight: bold;
        color: #1d3b6c;
        font-size: 2vh;

    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    width: 30vw;
    margin-left: 1.2vw;

    div {
        width: 100%;
    }

    button {
        height: 3vh;
        margin-top: 1.4vh;
        width: 20vw;

        border-radius: 5px;
        border: 0;
        background: #002360;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
    }

    p {
        margin-top: 0.6vh;
        font-size: 1.5vh;
    }
`;

export const InputQuestion = styled.input`
    margin-top: 1vh;
    align-self: center;
    height: 5vh;
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
    height: 3vh;
    margin-top: 0.5vh;

    padding: 0 2.4vh;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
`;

export const InputAnswer = styled.input`
    height: 3vh;
    margin-top: 0.5vh;

    padding: 0 2.4vh;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
`;

export const Question = styled.div`
    width: 30vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin-left: 2vw;
    text-align: center;
    
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
    width: 30vw;
    height: 10vh;
    margin-top: 0.5vh;
    font-size: 4vh;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: #3163b7;
    color: #fff;

    border: 0;
    border-radius: 5px;

    ${(props) =>
    props.isSelected &&
    css`
        border: 5px solid;
        border-color: #3163b7;
    `}
`;

export const GifDiv = styled.div`
    width: 30vw;
    height: 20vh;
    display: flex;
    text-align: center;


    img {
        width: 30vw;
    }
`;

export const GifButtons = styled.div`
    width: 30vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    line-break: auto;
    div{
        width:7vw;
        p {
            margin-top: 4px;
            line-break: auto;
            text-align: center;
        }
    }
`;

export const GifButton = styled.button`
    border-radius: 50%;
    width: 7vw;
    height: 7vw;
    background: #3163b7;
    border: none;
    margin-top: 1.5vh;
    align-content: center;

    img {
        width: 7vw;
        height: 7vw;
    }


`;