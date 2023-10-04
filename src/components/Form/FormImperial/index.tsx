import useImperialBMI from '../../../hooks/useImperialBMI'
import { useBMIContext, BMIContextType } from '../../../context/BMIContext'
import Input from '../../Input'
import { S } from '../styles'
import { categoryMetricBMI } from '../../../utils/categoryBMI'

const FormImperial = () => {
  const {
    heightImperial,
    weightImperial,
    setHeightImperial,
    setWeightImperial,
    inputIsEmpty,
    resultBMI
  } = useBMIContext() as BMIContextType
  const { idealWeightRange } = useImperialBMI()

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

  // Método para checar a faixa e categoria de IMC
  const checkBMI = () => {
    const bmi = resultBMI
    const category = categoryMetricBMI.find((cat) => bmi <= cat.limit)?.category
    return { bmi, category }
  }
  const { bmi, category } = checkBMI()

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
                  {idealWeightRange.minWeight.st}st{' '}
                  {idealWeightRange.minWeight.lbs}lbs -{' '}
                  {idealWeightRange.maxWeight.st}st{' '}
                  {idealWeightRange.maxWeight.lbs}lbs
                </span>
              </p>
            </S.ResultText>
          </>
        )}
      </S.ContainerResult>
    </>
  )
}

export default FormImperial
