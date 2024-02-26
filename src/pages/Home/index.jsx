import { FiPlus } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './style'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Input } from '../../components/Input'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />
      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Nodejs" /></li>
      </Menu>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: "React Modal",
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
            ]
          }}
          />
          <Note data={{
            title: "Teste Felipe",
            tags: [
              { id: '1', name: 'felipe' },
              { id: '2', name: 'giusti' },
              { id: '3', name: 'teste' },
              { id: '4', name: 'almoço' }
            ]
          }}
          />
        </Section>
      </Content>
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}