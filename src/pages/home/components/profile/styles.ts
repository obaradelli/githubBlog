import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    min-width: 100%;

    padding: 0 2rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin-top: -8rem;

    position: relative;
  `}
`

export const DivCard = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors['base-profile']};
    border-radius: 6px;
    padding: 2rem;
    width: 50%;
    position: relative;

    @media (max-width: 1275px) {
      html {
        font-size: 85.5%;
        p {
          text-align: center;
        }
      }

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 975px) {
      html {
        font-size: 65.5%;
        text-align: center;
      }

      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: 540px) {
      font-size: 40%;
      text-align: center;

      width: 110%;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    p {
      font-family: ${theme.fontFamily.nunito};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['base-text']};
    }

    @media (max-width: 540px) {
      html {
        font-size: 50.5%;
        text-align: center;
      }

      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .set100 {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .divrow {
      display: flex;
      flex-direction: row;
      gap: 2rem;

      img {
        width: 9.06rem;
        max-width: 9.0625rem;
        border-radius: 6px;
      }

      @media (max-width: 1275px) {
        html {
          font-size: 85.5%;
          p {
            text-align: center;
          }
        }

        display: flex;
        flex-direction: column;
        align-items: center;
      }

      @media (max-width: 975px) {
        html {
          font-size: 65.5%;
          text-align: center;
        }

        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
      }

      @media (max-width: 975px) {
        html {
          font-size: 65.5%;
          text-align: center;
        }

        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
      }

      @media (max-width: 540px) {
        html {
          font-size: 50.5%;
          text-align: center;
        }

        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .divrow2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 100%;
      border-radius: 6px;

      h1 {
        font-family: ${theme.fontFamily.nunito};
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize[24]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors['base-title']};
      }

      img {
        width: 15%;
      }

      a {
        all: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        font-family: ${theme.fontFamily.nunito};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[12]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors.blue};

        cursor: pointer;
      }

      img,
      svg {
        color: ${theme.colors.blue};
      }

      @media (max-width: 1275px) {
        html {
          font-size: 85.5%;
        }

        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .agap {
      display: flex;

      gap: 2rem;
    }

    .divrow3 {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      flex-wrap: wrap;

      width: 100%;
      height: 100%;
      gap: 1.5rem;

      img {
        width: 1.125rem;

        color: ${theme.colors['base-label']};
      }

      @media (max-width: 1275px) {
        html {
          font-size: 85.5%;
        }

        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }

    .divrow4 {
      display: flex;
      flex-direction: row;

      gap: 0.5rem;
    }
    @media (max-width: 540px) {
      font-size: 40%;
      text-align: center;

      width: 110%;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `}
`
