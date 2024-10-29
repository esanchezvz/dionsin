/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-white flex items-center justify-between absolute left-0 top-0 w-full">
        <Link href="/">
          <img src="/logo.svg" alt="DIONSIN" width={130} />
        </Link>

        <ul className="flex items-center gap-8 pr-6 text-lg">
          <li>
            <Link
              className="disabled uppercase text-gray-400 transition-colors cursor-not-allowed"
              href="#"
            >
              <h6 className="uppercase">Shop</h6>
            </Link>
          </li>
          <li>
            <Link
              className="disabled uppercase hover:text-red-700 transition-colors"
              href="https://www.instagram.com/dionsin_art"
              target="_blank"
            >
              <h6 className="uppercase">ig</h6>
            </Link>
          </li>
          <li>
            <Link
              className="disabled uppercase hover:text-red-700 transition-colors"
              href="https://wa.me/525586878806"
            >
              <h6 className="uppercase">contact</h6>
            </Link>
          </li>
        </ul>
      </div>
      <main className="flex flex-col w-screen h-svh items-center justify-center bg-red-500 gap-8">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam velit
          aut veritatis odit nesciunt dolores eveniet voluptatum excepturi
          doloribus quibusdam assumenda, deleniti dolor debitis, id ut nisi quia
          suscipit laudantium!
        </p>
      </main>
    </>
  );
}
