import { S } from './styles'

type PropsInputRadio = {
  label: string
  id: string
  name: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputRadio = ({
  label,
  id,
  name,
  checked,
  onChange
}: PropsInputRadio) => {
  return (
    <S.Wrapper>
      <S.Input
        type="radio"
        id={id}
        title={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <S.Label htmlFor={id}>{label}</S.Label>
    </S.Wrapper>
  )
}

export default InputRadio
