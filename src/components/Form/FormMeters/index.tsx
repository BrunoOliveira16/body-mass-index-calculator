import useMetricBMI from '../../../hooks/useMetricBMI'
import { useBMIContext, BMIContextType } from '../../../context/BMIContext'
import Input from '../../Input'
import { S } from '../styles'

const FormMeters = () => {
  const { heightMetric, weightMetric, setHeightMetric, setWeightMetric } =
    useBMIContext() as BMIContextType
  useMetricBMI()

  return (
    <S.Container>
      <Input
        label="Altura"
        unit="cm"
        placeholder="0"
        value={heightMetric}
        setValue={setHeightMetric}
      />
      <Input
        label="Peso"
        unit="kg"
        placeholder="0"
        value={weightMetric}
        setValue={setWeightMetric}
      />
    </S.Container>
  )
}

export default FormMeters
