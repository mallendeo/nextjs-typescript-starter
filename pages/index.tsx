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
    <div>
      <Head>
        <title>{t('page-title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{t('welcome-message')}</h1>

        <Link href="/" locale={router.locale === 'en' ? 'es' : 'en'}>
          <button>{t('change-locale')}</button>
        </Link>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
  },
})

export default Home
