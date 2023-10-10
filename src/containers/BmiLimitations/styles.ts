import styled from 'styled-components'
import theme from '../../theme'

type CardProps = {
  cardIndex: number
}

export const S = {
  Section: styled.section`
    max-width: 1160px;
    width: 95%;
    margin: 0 auto;
    padding: 120px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 100%;
      padding: 96px 39px;
      justify-content: center;
    }

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      padding: 0 20px 96px;
    }
  `,
  ContainerText: styled.div`
    max-width: 50%;
    width: 100%;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      max-width: 100%;
      text-align: center;
      margin: 0 auto 40px;
    }
  `,
  Card: styled.div<CardProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 365px;
    padding: 32px;

    border-radius: 16px;
    background: ${theme.colors.pureWhite};
    box-shadow: 16px 32px 56px 0px rgba(143, 174, 207, 0.25);

    margin: ${(props) => {
      if (props.cardIndex === 1) {
        return '0 50px'
      } else if (props.cardIndex === 2) {
        return '0 0 0 auto'
      } else if (props.cardIndex === 4) {
        return '0 0 0 200px'
      }
    }};

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      max-width: 300px;
      margin: 0;
    }

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      max-width: 100%;
    }
  `,
  CardHeader: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    gap: 16px;
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

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSizes.headingMobileL};
      letter-spacing: -1.6px;
      margin-bottom: 32px;
    }
  `,
  TitleCard: styled.h3`
    color: ${theme.colors.gunmetal};

    /* Heading S */
    font-family: 'Inter SemiBold', sans-serif;
    font-size: ${theme.fontSizes.headingS};
    font-weight: 600;
    line-height: normal;
    letter-spacing: -1px;
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
