import { DivCard, DivContainer } from './styles'

import arrowUp from '../../../../assets/arrowUp.svg'
import calendar from '../../../../assets/calendar.svg'
import arrowBack from '../../../../assets/arrowBack.svg'
import githubBrands from '../../../../assets/githubBrands.svg'
import commentsIcon from '../../../../assets/commentsIcon.svg'
import { Issue } from '../../../../@types/Issue'
import { dateFormatter } from '../../../../utils/formatter'
import moment from 'moment'

interface CardProps {
  issue: Issue
}

export function Card({ issue }: CardProps) {
  return (
    <DivContainer>
      <DivCard>
        <div className="divrow">
          <div className="set100">
            <div className="divrow2">
              <a href="/home">
                <img src={arrowBack} />
                VOLTAR
              </a>
              <div className="agap">
                <a href={issue.html_url} target="_blank">
                  GITHUB <img src={arrowUp} />
                </a>
              </div>
            </div>

            <h1>{issue.title}</h1>
            <p className="stlp">
              Dicas em geral para programadores iniciantes.
            </p>
            <div className="divrow3">
              <div className="divrow4">
                <img src={githubBrands} />
                <p>{issue.user?.login}</p>
              </div>
              <div className="divrow4">
                <img src={calendar} />
                <p>{moment(issue.created_at).format('DD/MM/YYYY')}</p>
              </div>
              <div className="divrow4">
                <img src={commentsIcon} />
                <p>{issue.comments} comentários</p>
              </div>
            </div>
          </div>
        </div>
      </DivCard>
    </DivContainer>
  )
}
