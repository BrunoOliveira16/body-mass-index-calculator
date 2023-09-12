import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Inter Regular';
        src: url('/assets/fonts/static/Inter-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter SemiBold';
        src: url('/assets/fonts/static/Inter-Regular-SemiBold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
      }
`
export default GlobalStyle
