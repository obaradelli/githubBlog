import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 50%;
    height: 100%;
    gap: 2rem;
    margin-bottom: 2rem;

    align-items: center;
    align-content: center;
    justify-content: center;

    @media (max-width: 2130px) {
      width: 60%;
      display: grid;
      grid-template-columns: none;
      font-size: 85.5%;
    }

    @media (max-width: 975px) {
      width: 80%;
      display: grid;
      grid-template-columns: none;
      font-size: 85.5%;
    }

    @media (max-width: 645px) {
      width: 80%;
      display: grid;
      grid-template-columns: none;
      font-size: 80.5%;
    }
  `}
`

export const DivContainerSearch = styled.div`
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

      &:focus {
        color: ${theme.colors['base-text']};
      }

      &:hover {
        color: ${theme.colors['base-text']};
      }
    }

    span {
      font-family: ${theme.fontFamily.nunito};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['base-subtitle']};

      &:focus {
        color: ${theme.colors['base-text']};
      }
      &:hover {
        color: ${theme.colors['base-text']};
      }
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

      &:focus {
        color: ${theme.colors['base-text']};
        border: 1px solid ${theme.colors.blue};
      }

      &:hover {
        color: ${theme.colors['base-text']};
        border: 1px solid ${theme.colors.blue};
      }
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

export const CardPost = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    padding: 2rem;
    border-radius: 10px;
    background: ${theme.colors['base-post']};

    border: 2px solid transparent;

    .flexcolumn {
      width: 100%;
      display: flex;
      flex-direction: column;

      gap: 1.25rem;
    }

    .flexrow {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      gap: 1rem;

      h2 {
        font-family: ${theme.fontFamily.nunito};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize[20]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors['base-title']};
      }

      span {
        width: min;
        align-self: top;

        font-family: ${theme.fontFamily.nunito};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[14]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors['base-span']};
      }

      @media (max-width: 645px) {
        flex-direction: column;
      }

      @media (max-width: 469px) {
        flex-direction: column;
      }
      @media (max-width: 432px) {
        flex-direction: column;
      }
      @media (max-width: 432px) {
        flex-direction: column;
      }
      @media (max-width: 396px) {
        flex-direction: column;
      }
      @media (max-width: 358px) {
        flex-direction: column;
      }
    }

    p {
      font-family: ${theme.fontFamily.nunito};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['base-text']};
    }

    &:hover {
      border: 2px solid ${theme.colors['base-label']};
    }
  `}
`
