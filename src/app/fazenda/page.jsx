import Image from "next/image";
import Link from "next/link";

export default async function ListaQueijosView() {

    let queijos;
    try {
        const response = await fetch("http://localhost:3000/api/laticinios/0");
        queijos = await response.json();
    } catch(error) {
        console.log();
    }

    return (
        <div>
            <h1 className="text-4xl font-extrabold">Lista de Queijos</h1>
            <div>
                <ul>
                    {queijos.map((queijo) => (
                        <li key={queijo.id} className="mt-10">
                            <h1>Nome: {queijo.nome}</h1>
                            <h1>Tipo: {queijo.tipo}</h1>
                            <figure>

                                <Link href={`/fazenda/${queijo.id}`}>
                                    <Image src={queijo.img} alt={queijo.nome} width={300} height={300}/>
                                </Link>

                                <figcaption>{queijo.descricao} - <span>R$ {queijo.preco}</span></figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
