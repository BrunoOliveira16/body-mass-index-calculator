import styled from 'styled-components'
import theme from '../../theme'

type ContainerProps = {
  justifyContent?: string
}

export const S = {
  Section: styled.section`
    width: 100%;
    margin: 0 auto;
    padding: 120px 140px;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      padding: 0 20px 96px;
    }
  `,
  Container: styled.div<ContainerProps>`
    width: 100%;
    display: flex;
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    gap: 32px;
    margin-bottom: 32px;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      flex-direction: column;
      justify-content: center;
      margin-bottom: 16px;
      gap: 16px;
    }
  `,
  ContainerText: styled.div`
    max-width: 564px;
    width: 100%;
    margin-right: 100px;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      text-align: center;
      margin-bottom: 40px;
    }
  `,
  Card: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 365px;
    padding: 32px;

    border-radius: 16px;
    background: ${theme.colors.pureWhite};
    box-shadow: 16px 32px 56px 0px rgba(143, 174, 207, 0.25);

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
