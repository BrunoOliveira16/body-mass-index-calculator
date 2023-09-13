import { S } from './styles'
import Logo from '../../assets/images/logo.svg'
import Form from '../../components/Form'

const Hero = () => {
  return (
    <S.Hero>
      <S.HeroContainer>
        <S.Logo src={Logo} title="Logo da página" />
        <S.Content>
          <S.Title>Calculadora de Indice de Massa Corporal</S.Title>
          <S.Text>
            Entenda melhor o seu peso em relação à sua altura usando nossa
            calculadora de índice de massa corporal (MC). Embora o IMC não seja
            o único determinante de um peso saudável, ele oferece um valioso
            ponto de partida para avaliar a sua saúde e bem-estar geral.
          </S.Text>
        </S.Content>
      </S.HeroContainer>
      <S.ContainerForm>
        <Form />
      </S.ContainerForm>
    </S.Hero>
  )
}

export default Hero
