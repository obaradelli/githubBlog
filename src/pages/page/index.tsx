import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Issue } from '../../@types/Issue'
import { Header } from '../../components/header'
import { api } from '../../lib/api'
import { Card } from './components/card'
import { Content } from './components/content'
import { DivContainer } from './styles'

export function Post() {
  const location = useLocation()

  const [issue, setIssue] = useState<Issue>({} as Issue)

  const LoadIssue = useCallback(async () => {
    const { data } = await api.get(
      `/repos/obaradelli/githubBlog/issues/${location.state.numberIssue}`
    )

    setIssue(data)
  }, [])

  useEffect(() => {
    LoadIssue()
  }, [LoadIssue])

  return (
    <div>
      <Header />
      <DivContainer>
        <Card issue={issue} />
        <Content issue={issue} />
      </DivContainer>
    </div>
  )
}
