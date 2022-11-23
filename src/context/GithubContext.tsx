import {
  ReactNode,
  useEffect,
  useState,
  useCallback,
  createContext,
  useContext,
} from 'react'

import { api } from '../lib/api'

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

interface UserContextType {
  user: User

  APIGitHub: (data: User) => Promise<void>
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as UserContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  async function APIGitHub() {
    const { data } = await api.get('/users/obaradelli')

    setUser(data)
  }

  useEffect(() => {
    APIGitHub()
  }, [])

  return (
    <GithubContext.Provider value={{ user, APIGitHub }}>
      {children}
    </GithubContext.Provider>
  )
}

export function useGithub() {
  const context = useContext(GithubContext)
  return context
}
