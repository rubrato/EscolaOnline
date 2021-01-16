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
`;

export const Header = styled.div`
    background: #fff;
    height: 60px;
    width: 100%;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;

    button {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    margin-top: 16vh;
    margin-bottom: 16vh;

    a {
        text-decoration: none;
        color: #fff;
    }

    th {
        border-radius: 10%;
        width: 16vh;
        height: 12vh;
        background: #fff;
    }

    h1 {
        font-size: 44px;
        color: #002360;
    }
`;

export const Card = styled.div`
    width: 35vw;
    border-radius: 5px;
    background: #fff;
    margin-top: 5vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2vw;



    p {
        color: #002360;
        font-size: 24px;
        font-weight: bold;  
    }

    p1{
        color: #002360;
        font-size: 18px;
        font-weight: bold; 
    }
`;