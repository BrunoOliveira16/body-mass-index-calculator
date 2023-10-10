import styled from 'styled-components'
import theme from '../../theme'

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligns-items: center;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export const S = {
  Section: styled.section`
    display: flex;
    justify-content: center;
    aligns-items: center;
    gap: 131px;
    max-width: 1160px;
    width: 100%;
    margin: 65px auto;

    @media screen and (max-width: 1180px) {
      max-width: 100%;
      width: 95%;
    }

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      gap: 48px;
      width: 100%;
    }

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      flex-direction: column;
      margin: 0 auto;
    }
  `,
  Content,
  ContentWithPadding: styled(Content)`
    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      padding: 0 24px;
    }
  `,
  BoxImage: styled.div`
    width: 564px;

    img {
      width: 100%;
    }

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
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

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      font-size: ${theme.fontSizes.headingMobileL};
      letter-spacing: -1.6px;
      margin-bottom: 32px;
    }
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
