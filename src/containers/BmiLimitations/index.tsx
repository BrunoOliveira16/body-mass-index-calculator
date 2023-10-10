import { S } from './styles'
import { BmiLimitsData } from '../../utils'

type Props = {
  title: string
  text: string
  icon: string
  id: number
}

const BmiLimitations = () => {
  return (
    <S.Section>
      <S.ContainerText>
        <S.Title>Limitações do IMC</S.Title>
        <S.Text>
          Embora o IMC seja frequentemente um indicador prático de peso
          saudável, não é adequado para todas as pessoas. Grupos específicos
          devem considerar cuidadosamente os seus resultados de IMC e, em certos
          casos, a utilização da medição pode não ser benéfica.
        </S.Text>
      </S.ContainerText>
      {BmiLimitsData.map(({ title, text, icon, id }: Props) => (
        <S.Card key={id} cardIndex={id}>
          <S.CardHeader>
            <img src={icon} alt={title} />
            <S.TitleCard>{title}</S.TitleCard>
          </S.CardHeader>
          <S.Text>{text}</S.Text>
        </S.Card>
      ))}
    </S.Section>
  )
}

export default BmiLimitations
