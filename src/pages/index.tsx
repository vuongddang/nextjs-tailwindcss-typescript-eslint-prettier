import Head from 'next/head'
import { ReactElement } from 'react'

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
        <main>
          <h1 className="font-mono text-xl code">
            Welcome to <span className="text-purple-700">Nextjs</span>,
            <span className="text-indigo-700">TailwindCSS</span> and <span className="text-gray-700">TypeScript</span>
          </h1>
        </main>
      </div>
    </>
  )
}
