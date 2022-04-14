import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: any) {
  return (
    <div className="bg-white dark:bg-[#222222]">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
