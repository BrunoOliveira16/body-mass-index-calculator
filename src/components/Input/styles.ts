import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Wrapper: styled.div`
    display: block;
  `,
  InputContainer: styled.div`
    width: 100%;
    padding: 20px 24px;
    display: flex;

    border-radius: 12px;
    border: 1px solid ${theme.colors.borders};
    background: ${theme.colors.pureWhite};
  `,
  Label: styled.p`
    margin-bottom: 8px;
    color: ${theme.colors.darkElectricBlue};

    /* Body S */
    font-family: 'Inter Regular', sans-serif;
    font-size: ${theme.fontSizes.bodyS};
    font-weight: 400;
    line-height: ${theme.lineHeight.body}; /* 21px */
  `,
  Input: styled.input`
    width: 100%;
    border: none;
    color: ${theme.colors.gunmetal};

    /* Heading M */
    font-family: 'Inter Regular', sans-serif;
    font-size: ${theme.fontSizes.headingM};
    font-weight: 600;
    letter-spacing: -1.2px;

    &:focus {
      outline: none;
    }
  `,
  Unit: styled.span`
    color: ${theme.colors.blue};

    /* Heading M */
    font-family: 'Inter Regular', sans-serif;
    font-size: ${theme.fontSizes.headingM};
    font-weight: 600;
    letter-spacing: -1.2px;
  `
}
