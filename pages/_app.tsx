import 'tailwindcss/tailwind.css'

import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import tw, { css, GlobalStyles } from 'twin.macro'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Global
        styles={css`
          html,
          body,
          #__next {
            ${tw`w-full h-full`}
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)
