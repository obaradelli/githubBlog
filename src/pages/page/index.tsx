import { Header } from '../../components/header'
import { Card } from './components/card'
import { Content } from './components/content'
import { DivContainer } from './styles'

export function Post() {
  return (
    <div>
      <Header />
      <DivContainer>
        <Card />
        <Content />
      </DivContainer>
    </div>
  )
}
