import { DivContainer } from './styles'
import { Posts } from './components/posts'
import { Profile } from './components/profile'
import { SearchBar } from './components/search'
import { Header } from '../../components/header'

export function Home() {
  return (
    <>
      <div>
        <Header />
        <DivContainer>
          <Profile />
          <SearchBar />
          <Posts />
        </DivContainer>
      </div>
    </>
  )
}
