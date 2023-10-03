import useImperialBMI from '../../../hooks/useImperialBMI'
import { useBMIContext, BMIContextType } from '../../../context/BMIContext'
import Input from '../../Input'
import { S } from '../styles'

const FormImperial = () => {
  const {
    heightImperial,
    weightImperial,
    setHeightImperial,
    setWeightImperial
  } = useBMIContext() as BMIContextType

  useImperialBMI()

  // Método para lidar com a mudança nos inputs de altura
  const handleHeightFtChange = (ft: number) => {
    setHeightImperial({ ...heightImperial, ft: ft })
  }
  const handleHeightInChange = (inch: number) => {
    setHeightImperial({ ...heightImperial, in: inch })
  }

  // Método para lidar com a mudança nos inputs de peso
  const handleWeightStChange = (st: number) => {
    setWeightImperial({ ...weightImperial, st: st })
  }
  const handleWeightLbsChange = (lbs: number) => {
    setWeightImperial({ ...weightImperial, lbs: lbs })
  }

  return (
    <>
      <S.Container>
        <Input
          label="Altura"
          unit="ft"
          placeholder="0"
          value={heightImperial.ft}
          setValue={handleHeightFtChange}
        />
        <Input
          unit="in"
          placeholder="0"
          value={heightImperial.in}
          setValue={handleHeightInChange}
        />
      </S.Container>
      <S.Container>
        <Input
          label="Peso"
          unit="st"
          placeholder="0"
          value={weightImperial.st}
          setValue={handleWeightStChange}
        />
        <Input
          unit="lbs"
          placeholder="0"
          value={weightImperial.lbs}
          setValue={handleWeightLbsChange}
        />
      </S.Container>
    </>
  )
}

export default FormImperial
