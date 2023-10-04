import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Hero: styled.header`
    width: 100%;
    padding: 0 140px 0 24px;
    position: relative;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      padding: 0;
      padding-bottom: 400px;
      margin-bottom: 32px;
    }
  `,
  HeroContainer: styled.div`
    max-width: 978px;
    padding: 75px 298px 200px 116px;
    border-radius: 0px 0px 35px 35px;
    background: ${theme.gradients.gradient1};

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      max-width: 100%;
      width: 100%;
      padding: 32px 24px 217px;
      border-radius: 0px 0px 35px 35px;
      text-align: center;
    }
  `,
  Content: styled.div`
    display: flex;
    max-width: 564px;
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      max-width: 100%;
      width: 100%;
      gap: 24px;
    }
  `,
  ContainerForm: styled.div`
    max-width: 564px;
    position: absolute;
    top: 167px;
    right: 140px;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      max-width: 100%;
      width: 90%;
      position: absolute;
      margin: 0 auto;
      right: 5%;
      top: 45%;
    }
  `,
  Logo: styled.img`
    width: 64px;
    height: 64px;
    margin-bottom: 127px;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      margin-bottom: 24px;
    }
  `,
  Title: styled.h1`
    color: ${theme.colors.gunmetal};

    /* Heading XL */
    font-family: 'Inter SemiBold', sans-serif;
    font-size: ${theme.fontSizes.headingXL};
    font-weight: 600;
    line-height: ${theme.lineHeight.heading}; /* 70.4px */
    letter-spacing: -3.2px;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSizes.headingL};
      letter-spacing: -2.4px;
    }
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
