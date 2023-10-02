import { S } from './styles'

type PropsInput = {
  label?: string
  unit?: string
  placeholder?: string
  inputType: string
  value: number | ''
  setValue: (value: number | '') => void
}

const Input = ({
  label,
  unit,
  placeholder,
  inputType,
  value,
  setValue
}: PropsInput) => {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        <S.Input
          type={inputType}
          title={label}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <S.Unit>{unit}</S.Unit>
      </S.InputContainer>
    </S.Wrapper>
  )
}

export default Input
