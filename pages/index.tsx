import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex p-10'>
      <h1 className="text-4xl font-bold ">Hello World from google cloud </h1>
      <h1 className="text-3xl font-bold ">inside a docker container </h1>
      <h1 className="text-2xl font-bold ">that has pulled its code from a github repo </h1>
      <h1 className="text-1xl font-bold ">it also features tailwinds and TYPESCRIPT! </h1>
      </div>

    </div>
  )
}

export default Home
