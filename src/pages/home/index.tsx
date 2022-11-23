import { useEffect } from 'react'
import { DivContainer } from './styles'
import { Posts } from './components/posts'
import { Profile } from './components/profile'
import { Header } from '../../components/header'

export function Home() {
  return (
    <>
      <div>
        <Header />
        <DivContainer>
          <Profile />
          <Posts />
        </DivContainer>
      </div>
    </>
  )
}
