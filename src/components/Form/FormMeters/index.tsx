import Input from '../../Input'
import { S } from '../styles'

type FormMetersProps = {
  height: number | ''
  weight: number | ''
  setHeight: (height: number | '') => void
  setWeight: (weight: number | '') => void
}

const FormMeters = ({
  height,
  weight,
  setHeight,
  setWeight
}: FormMetersProps) => {
  return (
    <S.Container>
      <Input
        inputType="number"
        label="Altura"
        unit="cm"
        placeholder="0"
        value={height}
        setValue={setHeight}
      />
      <Input
        inputType="number"
        label="Peso"
        unit="kg"
        placeholder="0"
        value={weight}
        setValue={setWeight}
      />
    </S.Container>
  )
}

export default FormMeters
