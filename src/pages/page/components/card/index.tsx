import { DivCard, DivContainer } from './styles'

import arrowUp from '../../../../assets/arrowUp.svg'
import calendar from '../../../../assets/calendar.svg'
import githubBrands from '../../../../assets/githubBrands.svg'
import commentsIcon from '../../../../assets/commentsIcon.svg'

export function Card() {
  return (
    <DivContainer>
      <DivCard>
        <div className="divrow">
          <div className="set100">
            <div className="divrow2">
              <h1>Boas práticas para devs em início de carreira #1</h1>
              <div className="agap">
                <a href={'user.html_url'} target="_blank">
                  GITHUB <img src={arrowUp} />
                </a>
              </div>
            </div>

            <p className="stlp">
              Dicas em geral para programadores iniciantes.
            </p>
            <div className="divrow3">
              <div className="divrow4">
                <img src={githubBrands} />
                <p>obaradelli</p>
              </div>
              <div className="divrow4">
                <img src={calendar} />
                <p>há 2 dias</p>
              </div>
              <div className="divrow4">
                <img src={commentsIcon} />
                <p>4 comentários</p>
              </div>
            </div>
          </div>
        </div>
      </DivCard>
    </DivContainer>
  )
}
