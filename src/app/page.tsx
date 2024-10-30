/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

import dionsin from "~/assets/dionsin.webp";
import moon from "~/assets/moon.webp";

export default function Home() {
  return (
    <>
      <div className="bg-white flex items-center justify-between absolute left-0 top-0 w-full z-10 p-4">
        <Link href="/">
          <img
            src="/logo.svg"
            alt="DIONSIN"
            className="w-[100px] md:w-[130px]"
          />
        </Link>

        <ul className="flex items-center gap-4 md:gap-8 text-base md:text-lg">
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
      <main className="flex flex-col md:flex-row w-screen h-svh items-center justify-center gap-8 relative bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden text-white p-4">
        <div className="text-[#cdcccc] font-bold text-4xl md:text-6xl uppercase text-center md:text-left">
          <p>MIAMI 2024</p>
          <p className="text-lg md:text-xl">dec</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src={dionsin}
            alt="dionsin"
            width={200}
            className="-mb-32 z-10 w-[150px] md:w-[200px]"
          />
          <Image
            src={moon}
            alt="moon"
            width={500}
            className="w-[300px] md:w-[500px]"
          />
        </div>

        <div className="text-[#cdcccc] font-bold text-4xl md:text-6xl uppercase text-center md:text-left">
          <p>MEXICO 2025</p>
          <p className="text-lg md:text-xl">feb</p>
        </div>
      </main>
    </>
  );
}
