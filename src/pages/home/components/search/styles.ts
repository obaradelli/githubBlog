import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;

    .space {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .space2 {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 0.75rem;
    }

    label {
      font-family: ${theme.fontFamily.nunito};
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize[18]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['base-subtitle']};
    }

    span {
      font-family: ${theme.fontFamily.nunito};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['base-subtitle']};
    }

    input {
      all: unset;

      width: 96%;
      background: ${theme.colors['base-input']};
      padding: 20px;

      border: 1px solid ${theme.colors['base-border']};
      border-radius: 9px;

      font-family: ${theme.fontFamily.nunito};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['base-label']};
    }

    @media (max-width: 975px) {
      html {
        font-size: 85.5%;
      }

      .space {
        width: 80%;
      }
    }
  `}
`
