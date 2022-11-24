import ReactMarkdown from 'react-markdown'

import { Issue } from '../../../../@types/Issue'
import { DivContainer } from './styles'

interface ContentProps {
  issue: Issue
}

export function Content({ issue }: ContentProps) {
  return (
    <DivContainer>
      <div>
        <p>{issue.body}</p>
      </div>
      <div className="background">
        <p>{issue.body}</p>
      </div>
    </DivContainer>
  )
}
