import Input from '../Input'
import InputRadio from '../InputRadio'
import { S } from './styles'

const Form = () => {
  return (
    <S.Form>
      <S.TitleForm>Insira seus dados abaixo</S.TitleForm>
      <S.Container>
        <InputRadio label="Metros" id="metros" name="unidade" />
        <InputRadio label="Imperial" id="imperial" name="unidade" />
      </S.Container>
      <S.Container>
        <Input inputType="number" label="Altura" unidade="cm" />
        <Input inputType="number" label="Peso" unidade="kg" />
      </S.Container>
      <S.ContainerResult>
        <S.Result>
          <p>Seu IMC é...</p>
          <h3>23.4</h3>
        </S.Result>
        <S.ResultText>
          <p>
            Seu IMC sugere que você tem um peso saudável. Seu peso ideal está
            entre <span>63.3kg - 85.2kg</span>.
          </p>
        </S.ResultText>
      </S.ContainerResult>
    </S.Form>
  )
}

export default Form
