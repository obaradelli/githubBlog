import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 50%;

    flex-direction: column;
    align-items: flex-start;

    gap: 50px;

    h2 {
      font-family: ${theme.fontFamily.nunito};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors.blue};

      text-decoration: underline;
    }

    p {
      font-family: ${theme.fontFamily.nunito};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['base-text']};
    }

    .background {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      gap: 0.2rem;

      border-radius: 5px;

      background-color: ${theme.colors['base-post']};
    }
  `}
`
