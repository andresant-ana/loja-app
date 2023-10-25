import Link from 'next/link'

export default function Cabecalho() {
  return (
    <header className='bg-slate-700 h-30 text-white'>
        <nav>
            <ul>
                <li><Link href="/">→ Home</Link></li>
                <li><Link href="/produtos/camisa">→ Camisa</Link></li>
                <li><Link href="/produtos/tenis">→ Tenis</Link></li>
                <li><Link href="/fazenda">→ Queijos</Link></li>
            </ul>
        </nav>
    </header>
  )
}
