import { Container, Form, Background } from './style.js'
import { Input } from '../../components/Input/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salva e gerenciar suas notas.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar" />

        <a href="#" target='_blank'>Voltar para o login</a>
      </Form>
    </Container>
  )
}