import { S } from './styles'

type PropsInput = {
  label: string
  unidade?: string
  inputType: string
}

const Input = ({ label, unidade, inputType }: PropsInput) => {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        <S.Input type={inputType} title={label} />
        <S.Unit>{unidade}</S.Unit>
      </S.InputContainer>
    </S.Wrapper>
  )
}

export default Input
