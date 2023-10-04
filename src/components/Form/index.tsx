import { useState } from 'react'
import InputRadio from '../InputRadio'
import FormMeters from './FormMeters'
import FormImperial from './FormImperial'
import { S } from './styles'

const Form = () => {
  const [unit, setUnit] = useState('metric')

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
    </S.Form>
  )
}

export default Form
