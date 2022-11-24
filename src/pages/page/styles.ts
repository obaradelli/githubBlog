import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4.5rem;

    position: relative;
  `}
`
