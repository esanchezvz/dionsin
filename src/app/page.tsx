/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import Link from "next/link";

import dionsin from "~/assets/dionsin.webp";
import moon from "~/assets/the_moon.webp";
import { Particles } from "~/components/particles";

export default function Home() {
  return (
    <div className="flex flex-col h-svh overflow-hidden">
      <div className="bg-white z-10">
        <div className="flex items-center justify-between container mx-auto p-2">
          <Link href="/">
            <img
              src="/logo_dionsin.svg"
              alt="DIONSIN"
              className="w-[120px] md:w-[150px]"
            />
          </Link>

          <ul className="flex items-center gap-4 md:gap-8 text-lg md:text-xl lg:text-2xl">
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
      </div>

      <main className="grow text-white">
        <Particles />
        <div className="flex w-screen h-full md:items-center justify-center gap-8 relative container mx-auto p-4">
          <div className="md:relative absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 md:translate-y-0 md:translate-x-0 md:left-[unset] w-full max-w-[500px] z-20">
            <Image
              src={dionsin}
              alt="dionsin"
              width={200}
              className="absolute w-[200px] left-1/2 -translate-x-1/2 md:bottom-[50%] z-10 bottom-[70%]"
            />
            <Image
              src={moon}
              alt="moon"
              width={500}
              className="w-[500px] slow-spin"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
