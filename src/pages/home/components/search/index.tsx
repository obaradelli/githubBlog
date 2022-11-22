import { DivContainer } from './styles'

export function SearchBar() {
  return (
    <>
      <DivContainer>
        <form className="space">
          <div className="space2">
            <label>Publicações</label>
            <span>6 publicações</span>
          </div>
          <input type="text" placeholder="Buscar conteúdo"></input>
        </form>
      </DivContainer>
    </>
  )
}
