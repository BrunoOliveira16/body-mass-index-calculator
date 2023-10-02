import { useEffect, useState } from 'react'
import InputRadio from '../InputRadio'
import FormMeters from './FormMeters'
import FormImperial from './FormImperial'
import { S } from './styles'

const Form = () => {
  const [unit, setUnit] = useState('meters')
  const [height, setHeight] = useState<number | ''>('')
  const [weight, setWeight] = useState<number | ''>('')
  const [resultBMI, setResultBMI] = useState<number>(0)
  const [inputIsEmpty, setInputIsEmpty] = useState(true)

  useEffect(() => {
    const isEmpty =
      height === '' || weight === '' || height === 0 || weight === 0
    setInputIsEmpty(isEmpty)

    if (!isEmpty) {
      const isValidNumber = !isNaN(height as number) && !isNaN(weight as number)

      if (isValidNumber) {
        const newResultBMI = calculateBMI(height as number, weight as number)
        setResultBMI(newResultBMI)
      } else {
        setResultBMI(0)
      }
    }
  }, [height, weight])

  function calculateBMI(height: number, weight: number): number {
    if (height === 0 || weight === 0) {
      return 0
    }

    const heightInMeters = height / 100
    const result = +(weight / (heightInMeters * heightInMeters)).toFixed(2)
    return result
  }

  return (
    <S.Form>
      <S.TitleForm>Insira seus dados abaixo</S.TitleForm>
      <S.Container>
        <InputRadio
          label="Metros"
          id="metros"
          name="unidade"
          checked={unit === 'meters'}
          onChange={() => setUnit('meters')}
        />
        <InputRadio
          label="Imperial"
          id="imperial"
          name="unidade"
          checked={unit === 'imperial'}
          onChange={() => setUnit('imperial')}
        />
      </S.Container>

      {unit === 'meters' ? (
        <FormMeters
          height={height}
          weight={weight}
          setHeight={setHeight}
          setWeight={setWeight}
        />
      ) : (
        <FormImperial
          height={height}
          weight={weight}
          setHeight={setHeight}
          setWeight={setWeight}
        />
      )}

      <S.ContainerResult>
        {inputIsEmpty ? (
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
              <h3>{resultBMI}</h3>
            </S.Result>
            <S.ResultText>
              <p>
                Seu IMC sugere que você tem um peso saudável. Seu peso ideal
                está entre <span>63.3kg - 85.2kg</span>.
              </p>
            </S.ResultText>
          </>
        )}
      </S.ContainerResult>
    </S.Form>
  )
}

export default Form
