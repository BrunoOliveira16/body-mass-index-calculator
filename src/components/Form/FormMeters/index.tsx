import useMetricBMI from '../../../hooks/useMetricBMI'
import { useBMIContext, BMIContextType } from '../../../context/BMIContext'
import { categoryMetricBMI } from '../../../utils/categoryBMI'
import Input from '../../Input'
import { ContainerForm } from './styles'
import { S } from '../styles'

const FormMeters = () => {
  const {
    heightMetric,
    weightMetric,
    setHeightMetric,
    setWeightMetric,
    inputIsEmpty,
    resultBMI
  } = useBMIContext() as BMIContextType
  useMetricBMI()
  const { idealWeightRange } = useMetricBMI()

  // Método para checar a faixa e categoria de IMC
  const checkBMI = () => {
    const bmi = resultBMI
    const category = categoryMetricBMI.find(
      (cat: { limit: number }) => bmi <= cat.limit
    )?.category
    return { bmi, category }
  }
  const { bmi, category } = checkBMI()

  return (
    <>
      <ContainerForm>
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
      </ContainerForm>
      <S.ContainerResult>
        {inputIsEmpty || resultBMI === 0 ? (
          <S.Welcome>
            <h3>Bem Vindo!</h3>
            <p>
              Insira sua altura e peso e você verá o resultado do seu IMC aqui
            </p>
          </S.Welcome>
        ) : (
          <>
            <S.Result>
              <p>Seu IMC é...</p>
              <h3>{bmi.toFixed(1)}</h3>
            </S.Result>
            <S.ResultText>
              <p>
                Seu IMC sugere que {category}. Seu peso ideal está entre{' '}
                <span>
                  {idealWeightRange.minWeight.toFixed(1)}kg -{' '}
                  {idealWeightRange.maxWeight.toFixed(1)}
                  kg
                </span>
              </p>
            </S.ResultText>
          </>
        )}
      </S.ContainerResult>
    </>
  )
}

export default FormMeters
