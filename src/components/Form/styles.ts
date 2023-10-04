import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Form: styled.form`
    display: flex;
    width: 100%;
    padding: 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;

    border-radius: 16px;
    background: ${theme.colors.pureWhite};
    box-shadow: 16px 32px 56px 0px rgba(143, 174, 207, 0.25);

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      padding: 24px;
    }
  `,
  TitleForm: styled.h3`
  color: ${theme.colors.gunmetal});

  /* Heading M */
  font-family: 'Inter Regular', sans-serif;
  font-size: ${theme.fontSizes.headingM};
  font-weight: 600;
  letter-spacing: -1.2px;
  `,
  Container: styled.div`
    display: flex;
    gap: 24px;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      width: 100%;
    }
  `,
  ContainerResult: styled.div`
    width: 100%;
    display: flex;
    padding: 32px;
    justify-content: center;
    align-items: center;
    gap: 24px;

    border-radius: 16px 999px 999px 16px;
    background: ${theme.gradients.gradient2};
    color: ${theme.colors.pureWhite};

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      border-radius: 16px;
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  Welcome: styled.div`
    width: 100%;
    color: ${theme.colors.pureWhite};

    h3 {
      margin-bottom: 16px;

      /* Heading M */
      font-family: 'Inter Regular', sans-serif;
      font-size: ${theme.fontSizes.headingM};
      font-weight: 600;
      line-height: normal;
      letter-spacing: -1.2px;
    }

    p {
      /* Body S */
      font-family: 'Inter Regular', sans-serif;
      font-size: ${theme.fontSizes.bodyS};
      font-weight: 400;
      line-height: ${theme.lineHeight.body}; /* 21px */
    }
  `,
  Result: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;

    p {
      /* Body M (Bold) */
      font-family: 'Inter Regular', sans-serif;
      font-size: ${theme.fontSizes.bodyM};
      font-weight: 600;
      line-height: ${theme.lineHeight.body}; /* 24px */
    }

    h3 {
      /* Heading XL */
      font-family: 'Inter Regular', sans-serif;
      font-size: ${theme.fontSizes.headingXL};
      font-weight: 600;
      line-height: ${theme.lineHeight.heading}; /* 70.4px */
      letter-spacing: -3.2px;
    }

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      width: 100%;
    }
  `,
  ResultText: styled.div`
    width: 50%;

    p {
      /* Body S */
      font-family: 'Inter Regular', sans-serif;
      font-size: ${theme.fontSizes.bodyS};
      font-weight: 400;
      line-height: ${theme.lineHeight.body}; /* 21px */

      span {
        font-weight: 700;
      }
    }

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      width: 100%;
    }
  `
}
