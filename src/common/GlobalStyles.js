/**
 * GlobalStyles.js
 * 글로벌하게 적용되는 스타일만 모아서 작성
 */

import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    // reset.css 를 리액트에서 쉽게 사용하는 방법
    ${reset}
    // font 가져오기

    @font-face {
        font-family: 'SUIT-Bold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Bold.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'SUIT-Medium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'SUIT', 'Noto Sans SC', sans-serif;
    }

    a {
        text-decoration: none;
        color: black;
    }

    button {
        cursor: pointer;
    }
   
    input,
    textarea,
    button {
        border: none;
        background-color: transparent;
        font-family: 'SUIT', 'Noto Sans SC', sans-serif;
        outline: none;
    }
`;

export default GlobalStyles;
