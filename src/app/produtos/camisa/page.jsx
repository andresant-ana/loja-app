import Link from 'next/link'
import Image from 'next/image'

export default function Camisa() {
  return (
    <>
      <div>
        
        <h2>CAMISA</h2>

        <div>
          <Image
            src="https://raw.githubusercontent.com/andresant-ana/next.js-introduction/main/public/camisa.jpg"
            width={300}
            height={300}
            alt="Camisa"
          />

          <p>Camisa masculina manga curta básica, confeccionada em algodão 100%, garantindo conforto e durabilidade. Possui gola redonda. É uma peça versátil, que pode ser usada em diversas ocasiões, desde o dia a dia até ocasiões formais.</p>

          <p>
            <Link href="/">← Voltar à página principal</Link>
          </p>

        </div>

      </div>
    </>
  )
}
