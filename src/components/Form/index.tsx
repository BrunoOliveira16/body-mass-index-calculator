import { useState } from 'react'
import { useBMIContext, BMIContextType } from '../../context/BMIContext'
import InputRadio from '../InputRadio'
import FormMeters from './FormMeters'
import FormImperial from './FormImperial'
import { S } from './styles'

const Form = () => {
  const [unit, setUnit] = useState('metric')
  const { inputIsEmpty, resultBMI } = useBMIContext() as BMIContextType

  return (
    <S.Form>
      <S.TitleForm>Insira seus dados abaixo</S.TitleForm>
      <S.Container>
        <InputRadio
          label="Métrico"
          id="metros"
          name="unidade"
          checked={unit === 'metric'}
          onChange={() => setUnit('metric')}
        />
        <InputRadio
          label="Imperial"
          id="imperial"
          name="unidade"
          checked={unit === 'imperial'}
          onChange={() => setUnit('imperial')}
        />
      </S.Container>

      {unit === 'metric' ? <FormMeters /> : <FormImperial />}

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
              <h3>{resultBMI.toFixed(1)}</h3>
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
