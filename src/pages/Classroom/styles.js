import styled from 'styled-components';

export const Container = styled.div`
    background: #5dbcd2;
    height: 100vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
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

    width: 30vw;
    margin-left: 24px;

    div {
        width: 100%;
    }

    input {
        height: 30px;
        margin-top: 5px;

        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #FFF;
        border-right: 0;
    }

    button {
        height: 30px;
        margin-top: 14px;
        width: 20vw;

        border-radius: 5px 0 0 5px;
        border: 0;
        color: #3a3a3a;
        font-weight: bold;
        transition: background-color 0.2s;
    }
`;

export const AnswerButton = styled.button`
    width: 100px;
    height: 50px;
`;