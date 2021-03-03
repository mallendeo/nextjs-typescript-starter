import 'twin.macro'

import Counter from '@components/Counter'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = (): JSX.Element => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <section className="h-full grid place-items-center">
      <Head>
        <title>{t('page-title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold">{t('welcome-message')}</h1>

        <Link href="/" locale={router.locale === 'en' ? 'es' : 'en'}>
          <button>{t('change-locale')}</button>
        </Link>

        <Counter tw="mt-8" />
      </main>
    </section>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
  },
})

export default Home
