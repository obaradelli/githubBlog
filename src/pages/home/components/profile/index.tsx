import { DivCard, DivContainer } from './styles'

import arrowUp from '../../../../assets/arrowUp.svg'
import buildingSolid from '../../../../assets/buildingSolid.svg'
import githubBrands from '../../../../assets/githubBrands.svg'
import userGroupSolid from '../../../../assets/userGroupSolid.svg'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/api'

interface User {
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
  id: number
  login: string
  name: string
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User)

  async function APIGitHub() {
    const { data } = await api.get('/users/obaradelli')

    setUser(data)
  }

  useEffect(() => {
    APIGitHub()
  }, [])

  return (
    <>
      <DivContainer>
        <DivCard>
          <div className="divrow">
            <img src={user.avatar_url} />
            <div className="set100">
              <div className="divrow2">
                <h1>{user.name}</h1>
                <div className="agap">
                  <a href={user.html_url} target="_blank">
                    GITHUB <img src={arrowUp} />
                  </a>
                </div>
              </div>

              <p>{user.bio}</p>
              <div className="divrow3">
                <div className="divrow4">
                  <img src={githubBrands} />
                  <p>{user.login}</p>
                </div>
                <div className="divrow4">
                  <img src={buildingSolid} />
                  <p>{user.company}</p>
                </div>
                <div className="divrow4">
                  <img src={userGroupSolid} />
                  <p>{user.followers} seguidores</p>
                </div>
              </div>
            </div>
          </div>
        </DivCard>
      </DivContainer>
    </>
  )
}
