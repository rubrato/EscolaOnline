import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.png';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
    }

    body {
        font-family: Roboto, sans-serif;
        background: #F0F0F5 url(${background}) no-repeat 70% top;
    }

    button {
        cursor: pointer;
    }
`;
