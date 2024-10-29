/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-svh items-center justify-center bg-red-500 gap-8">
      <h1>Title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam velit
        aut veritatis odit nesciunt dolores eveniet voluptatum excepturi
        doloribus quibusdam assumenda, deleniti dolor debitis, id ut nisi quia
        suscipit laudantium!
      </p>
      <img src="/logo.svg" alt="DIONSIN" width={100} />
    </main>
  );
}
