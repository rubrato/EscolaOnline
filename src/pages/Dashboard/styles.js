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
    height: 8vh;
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
        font-size: 4vh;
        margin-left: 1vw;
        margin-right: 1vw;
    }

    img {
        margin-left: auto;
        margin-right: 1.2vw;
        padding-top: 0.6vh;
        height: 7vh;
        width: 7vh;
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
        font-size: 6vh;
        color: #002360;
    }
`;

export const Card = styled.div`
    width: 50vw;
    border-radius: 5px;
    background: #fff;
    margin-top: 4vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2vw;



    p {
        color: #002360;
        font-size: 4.5vh;
        font-weight: bold;  
    }

    p1{
        color: #002360;
        font-size: 3.5vh;
        font-weight: bold; 
    }
`;