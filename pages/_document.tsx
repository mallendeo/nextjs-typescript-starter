import { extractCritical } from '@emotion/server'
import Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

interface Props extends DocumentProps {
  ids?: string[]
  css?: string
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const initialProps = await Document.getInitialProps(ctx)
    const page = await ctx.renderPage()
    const styles = extractCritical(page.html)
    return { ...initialProps, ...page, ...styles }
  }

  render(): JSX.Element {
    const props: Props = this.props
    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion-css={props.ids?.length ? props.ids.join(' ') : ''}
            dangerouslySetInnerHTML={{ __html: typeof props.css !== 'undefined' ? props.css : '' }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
