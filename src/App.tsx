import BmiLimitations from './containers/BmiLimitations'
import Hero from './containers/Hero'
import Tips from './containers/Tips'
import YourResults from './containers/YourResult'
import { BMIProvider } from './context/BMIContext'
import GlobalStyle, { Container } from './globalStyle'

function App() {
  return (
    <BMIProvider>
      <GlobalStyle />
      <Container>
        <Hero />
        <YourResults />
        <Tips />
        <BmiLimitations />
      </Container>
    </BMIProvider>
  )
}

export default App
