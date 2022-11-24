import { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Issue } from '../../../../@types/Issue'
import { api } from '../../../../lib/api'
import { dateFormatter } from '../../../../utils/formatter'
import { CardPost, DivContainer, DivContainerSearch } from './styles'

interface searchProps {
  search: string
}

export function Posts() {
  const [issues, setIssues] = useState<Issue[]>([])

  const LoadIssues = useCallback(async () => {
    const { data } = await api.get('/repos/obaradelli/githubBlog/issues')

    setIssues(data)
  }, [])

  useEffect(() => {
    LoadIssues()
  }, [LoadIssues])

  const [search, setSearch] = useState('')

  // `/search/issues?q=${search}repo:oBaradelli/githubBlog`
  console.log(search)

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
          <input
            type="text"
            placeholder="Buscar conteúdo"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </form>
      </DivContainerSearch>

      <DivContainer>
        {issues.map((issue) => {
          return (
            <NavLink
              to="/post"
              style={{ all: 'unset', cursor: 'pointer' }}
              key={issue.number}
              state={{ numberIssue: issue.number }}
            >
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
