import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Section: styled.section`
    width: 100%;
    padding: 24px;
  `,
  ContainerCards: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    border-radius: 35px;
    background: ${theme.gradients.gradient1};
    padding: 72px 116px 96px;
  `,
  Title: styled.h3`
    color: ${theme.colors.gunmetal};

    /* Heading M */
    font-family: 'Inter SemiBold', sans-serif;
    font-size: ${theme.fontSizes.headingM};
    font-weight: 600;
    line-height: normal;
    letter-spacing: -1.2px;
    margin: 45px 0 24px;
  `,
  Text: styled.p`
    color: ${theme.colors.darkElectricBlue};

    /* Body M */
    font-family: 'Inter', sans-serif;
    font-size: ${theme.fontSizes.bodyM};
    font-weight: 400;
    line-height: ${theme.lineHeight.body}; /* 24px */
  `
}
