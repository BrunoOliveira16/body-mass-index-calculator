import styled from 'styled-components'
import theme from '../../../theme'

export const ContainerForm = styled.div`
  display: flex;
  gap: 24px;

  @media screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    flex-direction: column;
  }
`
