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
    align-items: center;
    justify-content: center;
    margin-top: 16vh;
    margin-bottom: 16vh;

    th {
        border-radius: 10%;
        width: 16vh;
        height: 12vh;
        background: #fff;
    }
`;
