import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="bg-red-500 font-extrabold h-full w-full fixed">
        <h1 className="text-6xl text-white text-center mb-7 mt-7">404</h1>

        <Image className="mx-auto w-75"
          src="https://http.cat/404"
          alt="404"
          width={750}
          height={600}
        />

        <p className="text-white text-center text-3xl mt-7">Página não encontrada</p>
    </div>
  )
}
