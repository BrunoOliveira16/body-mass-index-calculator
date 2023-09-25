import { TipsData } from '../../utils'
import { S } from './styles'

type Props = {
  title: string
  text: string
  icon: string
}

const Tips = () => {
  return (
    <S.Section>
      <S.ContainerCards>
        {TipsData.map(({ title, text, icon }: Props, index: number) => {
          return (
            <div key={index}>
              <img src={icon} alt={title} />
              <S.Title>{title}</S.Title>
              <S.Text>{text}</S.Text>
            </div>
          )
        })}
      </S.ContainerCards>
    </S.Section>
  )
}

export default Tips
