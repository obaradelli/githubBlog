import { DivCard, DivContainer } from './styles'

import arrowUp from '../../../../assets/arrowUp.svg'
import buildingSolid from '../../../../assets/buildingSolid.svg'
import githubBrands from '../../../../assets/githubBrands.svg'
import userGroupSolid from '../../../../assets/userGroupSolid.svg'

export function Profile() {
  return (
    <>
      <DivContainer>
        <DivCard>
          <div className="divrow">
            <img src="https://github.com/obaradelli.png" />
            <div className="set100">
              <div className="divrow2">
                <h1>Marcos Baradelli</h1>
                <div className="agap">
                  <a href="https://github.com/obaradelli" target="_blank">
                    GITHUB <img src={arrowUp} />
                  </a>
                </div>
              </div>

              <p>
                Apenas uma descrição temporária, não ligar. Más vamos testar,
                caso o tamanho for maior que o esperado.
              </p>
              <div className="divrow3">
                <div className="divrow4">
                  <img src={githubBrands} />
                  <p>obaradelli</p>
                </div>
                <div className="divrow4">
                  <img src={buildingSolid} />
                  <p>MaxScalla</p>
                </div>
                <div className="divrow4">
                  <img src={userGroupSolid} />
                  <p>32 seguidores</p>
                </div>
              </div>
            </div>
          </div>
        </DivCard>
      </DivContainer>
    </>
  )
}
