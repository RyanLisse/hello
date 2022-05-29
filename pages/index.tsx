/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="font-black text-9xl uppercase">
          I Am The ONE
        </h1>
      </div>

    </div>
  );
};

export default Home;
