import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Hero: styled.header`
    max-width: 978px;
    padding: 75px 298px 200px 116px;
    border-radius: 0px 0px 35px 35px;
    background: ${theme.gradients.gradient1};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `,
  Logo: styled.img`
    width: 64px;
    height: 64px;
    margin-bottom: 127px;
  `,
  Content: styled.div`
    display: flex;
    max-width: 564px;
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
  `,
  Title: styled.h1`
    color: ${theme.colors.gunmetal};

    /* Heading XL */
    font-family: 'Inter SemiBold', sans-serif;
    font-size: ${theme.fontSizes.headingXL};
    font-weight: 600;
    line-height: ${theme.lineHeight.heading}; /* 70.4px */
    letter-spacing: -3.2px;
  `,
  Text: styled.p`
    color: ${theme.colors.darkElectricBlue};

    /* Body M */
    font-family: 'Inter Regular', sans-serif;
    font-size: ${theme.fontSizes.bodyM};
    font-weight: 400;
    line-height: ${theme.lineHeight.body}; /* 24px */
  `
}
