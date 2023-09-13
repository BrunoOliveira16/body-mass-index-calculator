import { S } from './styles'

type PropsInputRadio = {
  label: string
  id: string
  name: string
}

const InputRadio = ({ label, id, name }: PropsInputRadio) => {
  return (
    <S.Wrapper>
      <S.Input type="radio" id={id} title={id} name={name} />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.Wrapper>
  )
}

export default InputRadio
