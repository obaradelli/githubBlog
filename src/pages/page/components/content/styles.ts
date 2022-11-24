import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 50%;
    padding: 0 2rem;

    flex-direction: column;
    align-items: flex-start;

    gap: 50px;

    .yeah {
      width: 100%;

      @media (max-width: 1440px) {
        html {
          font-size: 85.5%;
        }

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }
    }

    h2 {
      font-family: ${theme.fontFamily.nunito};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
    }

    p {
      font-family: ${theme.fontFamily.nunito};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['base-text']};
    }

    a {
      font-family: ${theme.fontFamily.nunito};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors.blue};
    }

    img {
      width: 100%;
    }

    .linebreak {
      white-space: pre-wrap;
    }

    @media (max-width: 1440px) {
      html {
        font-size: 85.5%;
      }

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }

    @media (max-width: 1415px) {
      html {
        font-size: 65.5%;
      }
    }

    @media (max-width: 1415px) {
      html {
        font-size: 65.5%;
        text-align: center;
      }
    }

    @media (max-width: 1235px) {
      html {
        font-size: 50.5%;
        text-align: center;
      }
    }
  `}
`
