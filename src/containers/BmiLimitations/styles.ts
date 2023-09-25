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
  `,
  Container: styled.div<ContainerProps>`
    width: 100%;
    display: flex;
    justify-content: ${(props) => props.justifyContent || 'flex-start'};
    gap: 32px;
    margin-bottom: 32px;
  `,
  ContainerText: styled.div`
    max-width: 564px;
    width: 100%;
    margin-right: 100px;
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
