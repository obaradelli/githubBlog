import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { api } from '../../../../lib/api'
import { dateFormatter } from '../../../../utils/formatter'
import { CardPost, DivContainer, DivContainerSearch } from './styles'

interface Issue {
  html_url: string
  number: number
  title: string
  created_at: string
  body: string
}

export function Posts() {
  const [issues, setIssues] = useState<Issue[]>([])

  async function LoadIssues() {
    const { data } = await api.get('/repos/obaradelli/githubBlog/issues')

    setIssues(data)
  }

  useEffect(() => {
    LoadIssues()
  }, [])
  return (
    <>
      <DivContainerSearch>
        <form className="space">
          <div className="space2">
            <label>Publicações</label>
            <span>
              {issues.length} {issues.length > 1 ? 'publicações' : 'publicação'}
            </span>
          </div>
          <input type="text" placeholder="Buscar conteúdo"></input>
        </form>
      </DivContainerSearch>
      <DivContainer>
        {issues.map((issue) => {
          return (
            <NavLink to="/post" style={{ all: 'unset', cursor: 'pointer' }}>
              <CardPost key={issue.number}>
                <div className="flexcolumn">
                  <div className="flexrow">
                    <h2>{issue.title}</h2>
                    <span>
                      {dateFormatter.format(new Date(issue.created_at))}
                    </span>
                  </div>
                  <p>Dicas em geral para programadores iniciantes.</p>
                </div>
              </CardPost>
            </NavLink>
          )
        })}
      </DivContainer>
    </>
  )
}
