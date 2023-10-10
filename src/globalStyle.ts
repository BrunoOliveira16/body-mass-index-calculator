import styled, { createGlobalStyle } from 'styled-components'
import theme from './theme'

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

export const Container = styled.main`
  max-width: 1440px;
  min-width: 375px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    gap: 72px;
  }
`
