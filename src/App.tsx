import BmiLimitations from './containers/BmiLimitations'
import Hero from './containers/Hero'
import Tips from './containers/Tips'
import YourResults from './containers/YourResult'
import GlobalStyle, { Container } from './globalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Hero />
        <YourResults />
        <Tips />
        <BmiLimitations />
      </Container>
    </>
  )
}

export default App
