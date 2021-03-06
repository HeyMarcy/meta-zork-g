import { injectGlobal } from 'emotion';
import { FONTS, SHADOWS, SIZES } from './variables';

injectGlobal`
    @font-face {
        font-family: 'Fira Mono';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Fira Mono Regular'), local('FiraMono-Regular'), url(https://fonts.gstatic.com/s/firamono/v8/N0bX2SlFPv1weGeLZDtgJv7Ss9XZYQ.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    html, body {
        font-family: ${FONTS.PRIMARY};
        font-size: ${SIZES.STANDARD}px;
        margin: 0;
        height: 100%;
    }

    * {
        box-sizing: border-box;
        text-shadow: ${SHADOWS.PRIMARY_GLOW};
    }

    ul {
        margin: 0;
    }
`;