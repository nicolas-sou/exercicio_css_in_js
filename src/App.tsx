import Cabecalho from './components/Cabecalho'
import HeroTitulo from './components/Titulo'
import ListaVagas from './components/ListaVagas'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <HeroTitulo />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}
export default App
