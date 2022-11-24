import { User } from './User'

export interface Issue {
  html_url: string
  number: number
  title: string
  created_at: string
  body: string
  comments: string
  user: User
}
