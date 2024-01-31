import { Container } from './style'
import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <p>Felipe Giusti</p>
      <Button title="Entrar" loading />
      <Button title="Cadastrar" loading />
      <Button title="Voltar" loading />
    </Container>
  )
}