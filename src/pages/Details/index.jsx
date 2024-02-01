import { Container, Links, Content } from './style'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aspernatur ullam libero iusto ipsa numquam sequi qui possimus, nihil eaque? In necessitatibus veniam ab hic quod vel ipsum, blanditiis sunt.</p>
          <Section title="Links úteis">
            <Links>
              <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
              <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}