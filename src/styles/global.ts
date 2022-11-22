import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 ${({ theme }) => css`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   :focus {
     outline: 0;
     box-shadow: 0 0 0 2px ${theme.colors.blue};
   }

   body {
     background: ${theme.colors['base-background']};
     -webkit-font-smoothing: antialiased;
   }

   body,
   input,
   textarea,
   button {
     font-family: ${theme.fontFamily.nunito};
     font-weight: ${theme.fontWeight.regular};
     font-size: ${theme.fontSize[16]};
     line-height: ${theme.lineHeight[160]};
   }
 `}
`
