export default function Login() {
  return (
    <div>
        <div>
            <form>
                <fieldset>
                    <legend>LOGIN</legend>
                    <div>
                        <label htmlFor="idEmail">E-MAIL: </label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu e-mail." />
                    </div>
                    <div>
                        <label htmlFor="idSenha">SENHA: </label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha." />
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}
