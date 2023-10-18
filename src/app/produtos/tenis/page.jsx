import Link from 'next/link'
import Image from 'next/image'

export default function Tenis() {
  return (
    <>
      <div>
        
        <h2>TÊNIS</h2>

        <div>
          <Image
            src="https://th.bing.com/th/id/R.478e53b93574970d10b62508dc99e3b0?rik=b66%2bxpArBC3uTA&pid=ImgRaw&r=0"
            width={300}
            height={300}
            alt="Tenis"
          />

          <p>Tênis masculino running, ideal para caminhadas, corridas leves e treinos leves. Confeccionado em material leve e respirável, proporciona conforto e suporte durante a prática de atividades físicas.</p>

          <p>
            <Link href="/">← Voltar à página principal</Link>
          </p>

        </div>

      </div>
    </>
  )
}
