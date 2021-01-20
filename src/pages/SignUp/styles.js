import styled from 'styled-components';

import background from '../../assets/images/background.png';

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

    img{
        height:50vh;
        width:50vw;
        margin: 3vh
    }
    h2 {
        background: transparent;
        border: 0;
        font-weight: bold;
        color: #1d3b6c;
        margin-top: 1.5vh;
        font-size: 4vh;
    }
    p {
        font-weight: bold;
        color: #1d3b6c;
        margin-top: 1vh;
        font-size: 3vh;
    }
`;

export const Content = styled.div`
    margin-top: 2vh;
    display: flex;
`;

export const Form = styled.form`
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    //text-align: center;

    width: 30vw;
    margin-left: 1.5vw;

    div {
        width: 100%;
    }

    button {
        height: 5vh;
        margin-top: 1.5vh;
        width: 10vw;

        border-radius: 5px;
        border: 0;
        background: #002360;
        color: #fff;
        font-size: 2.5vh;
        font-weight: bold;
        transition: background-color 0.2s;
    }

    p {
        margin-top: 1vh;
        font-size: 2vh;
    }
`;

export const InputLogin = styled.input`
    height: 5vh;
    margin-top: 1vh;

    padding: 0 3vh;
    border: 0;
    border-radius: 5px;
    color: #3a3a3a;
`;