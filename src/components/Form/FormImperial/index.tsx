import Input from '../../Input'
import { S } from '../styles'

type FormMetersProps = {
  height: number | ''
  weight: number | ''
  setHeight: (height: number | '') => void
  setWeight: (weight: number | '') => void
}

const FormImperial = ({
  height,
  weight,
  setHeight,
  setWeight
}: FormMetersProps) => {
  return (
    <>
      <S.Container>
        <Input
          inputType="number"
          label="Altura"
          unit="ft"
          placeholder="0"
          value={height}
          setValue={setHeight}
        />
        <Input
          inputType="number"
          unit="in"
          placeholder="0"
          value={weight}
          setValue={setWeight}
        />
      </S.Container>
      <S.Container>
        <Input
          inputType="number"
          label="Peso"
          unit="st"
          placeholder="0"
          value={height}
          setValue={setHeight}
        />
        <Input
          inputType="number"
          unit="lbs"
          placeholder="0"
          value={weight}
          setValue={setWeight}
        />
      </S.Container>
    </>
  )
}

export default FormImperial
