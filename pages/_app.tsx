import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
