import 'tailwindcss/tailwind.css'

import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import tw, { css, GlobalStyles } from 'twin.macro'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default appWithTranslation(MyApp)
