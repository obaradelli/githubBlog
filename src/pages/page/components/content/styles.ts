import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    gap: 50px;
  `}
`
