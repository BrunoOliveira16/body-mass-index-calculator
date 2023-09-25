import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Section: styled.section`
    display: flex;
    justify-content: center;
    aligns-items: center;
    gap: 131px;
    width: 1160px;
    margin: 65px auto;
  `,
  Content: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    aligns-items: center;
  `,
  BoxImage: styled.div`
    width: 564px;

    img {
      width: 100%;
    }
  `,
  Title: styled.h2`
    color: ${theme.colors.gunmetal};

    /* Heading L */
    font-family: 'Inter SemiBold', sans-serif;
    font-size: ${theme.fontSizes.headingL};
    font-weight: 600;
    line-height: ${theme.lineHeight.heading}; /* 52.8px */
    letter-spacing: -2.4px;
    margin-bottom: 35px;
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
