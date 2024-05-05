/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [filter, ] = useState("");

  return (
    <div>
      <Head>
        <title>Travel The World</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="bg-gray-900 text-white p-4 flex justify-between items-center rounded-md">
        <div className="flex items-center">
          <img src="https://www.pngmart.com/files/4/Travel-PNG-Pic.png" alt="Logo" className="h-8 mr-2" />
          <Link href="/" className ="ml-4 bg-blue-500 text-white px-6 py-2 rounded-md">HOME</Link>
          {/* Bouton Edit */}
          <Link href="/edit" className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-md">EDIT</Link>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-center text-white-200 mb-2">TRAVEL THE WORLD</h1>
        <Link href="/addform" className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-md">ADD</Link>
      </header>

      <main className="flex flex-col max-w-xl mx-auto p-4">
        <Component {...pageProps} filter={filter} />
      </main>
    </div>
  );
}
