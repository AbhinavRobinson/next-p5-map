import type { NextPage } from 'next'
import Head from 'next/head'
import { SketchComponent } from '../components/sketch'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-start items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col h-screen justify-center items-center">
        {typeof document !== 'undefined' && (
          <SketchComponent
            width={document.body.clientWidth}
            height={document.body.clientHeight}
          />
        )}
      </main>
    </div>
  )
}

export default Home
