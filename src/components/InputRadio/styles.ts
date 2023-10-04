import styled from 'styled-components'
import theme from '../../theme'

export const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    width: 238px;

    @media screen and (max-width: ${theme.breakpoints.mobile}) {
      width: 100%;
    }
  `,
  Input: styled.input`
    appearance: none;
    width: 31px;
    height: 31px;
    background: ${theme.colors.pureWhite};
    border-radius: 50%;
    border: 1px solid ${theme.colors.borders};
    transition: all 0.6s;

    &:hover {
      border-color: ${theme.colors.blue};
    }

    &:checked {
      background: ${theme.colors.blue15};
      border-color: ${theme.colors.blue15};
    }

    &:checked::after {
      content: '';
      display: flex;
      margin: 7px auto;
      width: 15.5px;
      height: 15.5px;

      background: ${theme.colors.blue};
      border-radius: 50%;
      opacity: 1;
    }
  `,
  Label: styled.label`
    margin-left: 18px;
    color: ${theme.colors.gunmetal};

    /* Body M */
    font-family: 'Inter Regular', sans-serif;
    font-size: ${theme.fontSizes.bodyM};
    font-weight: 600;
    line-height: ${theme.lineHeight.body}; /* 21px */
  `
}
