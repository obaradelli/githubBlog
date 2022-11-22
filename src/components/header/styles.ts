import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    height: 30%;

    img {
      width: 100%;
      min-height: 300px;
      object-fit: cover;
    }
    /* padding: 2.5rem 0 7.5rem; */
  `}
`
