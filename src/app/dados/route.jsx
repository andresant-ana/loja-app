import { NextResponse } from "next/server";

export async function GET() {

    const pessoa = {
        nome: 'Andre',
        idade: 25,
        cidade: 'São Paulo',
        rg: '123456789',
        cpf: '123456789',
        telefone: '123456789',
        email: 'aaa@aaa.com',
        endereco: 'Rua A, 123'
    }

    return NextResponse.json(pessoa);

}
