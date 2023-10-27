export default async function QueijoView({ params }) {

    let queijo;
    try {
        const response = await fetch(`http://localhost:3000/api/laticinios/${params.id}`);
        queijo = await response.json();
    } catch(error) {
        console.log();
    }

    return (
        <div>
            <h1 className="text-4xl font-extrabold">Queijo</h1>
            <div>
                <ul>
                    <li key={queijo.id} className="mt-10">
                        <h1>Nome: {queijo.nome}</h1>
                        <h1>Tipo: {queijo.tipo}</h1>
                        <figure>
                            <img src={queijo.img} alt={queijo.nome} width={300} height={300}/>
                            <figcaption>{queijo.descricao} - <span>R$ {queijo.preco}</span></figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </div>
    )
}
