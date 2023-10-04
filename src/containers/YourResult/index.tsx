import { S } from './styles'
import Person from '../../assets/images/image-man-eating.webp'

const YourResults = () => {
  return (
    <S.Section>
      <S.Content>
        <S.BoxImage>
          <img src={Person} alt="imagem de um homen comendo" />
        </S.BoxImage>
      </S.Content>
      <S.ContentWithPadding>
        <S.Title>O que significa o seu resultado de IMC</S.Title>
        <S.Text>
          Uma faixa de IMC de 18,5 a 24,9 é considerada um “peso saudável”.
          Manter um peso saudável pode diminuir suas chances de ter problemas de
          saúde mais tarde, como obesidade e diabetes tipo 2. Procure uma dieta
          nutritiva com teor reduzido de gordura e açúcar, incorporando muitas
          frutas e vegetais. Além disso, esforce-se para praticar atividade
          física regular, de preferência cerca de 30 minutos diários, cinco dias
          por semana.
        </S.Text>
      </S.ContentWithPadding>
    </S.Section>
  )
}

export default YourResults
