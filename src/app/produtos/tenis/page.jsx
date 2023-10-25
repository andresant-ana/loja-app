import Link from 'next/link'
import Image from 'next/image'

export default function Tenis() {
  return (
    <>
      <div>
        
        <h2>TÊNIS</h2>

        <div>
          <Image
            src="https://mizunobr.vtexassets.com/arquivos/ids/233425-1600-1600?v=638216659790200000&width=1600&height=1600&aspect=true"
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
