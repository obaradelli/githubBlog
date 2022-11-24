import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { Issue } from '../../../../@types/Issue'
import { DivContainer } from './styles'

interface ContentProps {
  issue: Issue
}

export function Content({ issue }: ContentProps) {
  return (
    <DivContainer>
      <div className="yeah">
        <ReactMarkdown className="linebreak" remarkPlugins={[remarkGfm]}>
          {issue.body}
        </ReactMarkdown>
      </div>
    </DivContainer>
  )
}
