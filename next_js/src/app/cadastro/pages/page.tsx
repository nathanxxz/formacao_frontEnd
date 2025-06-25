import '../styles/page.css';

export default function Cadastro() {
  return (
    <div className="container">
      <form className="formulario">
        <h2>Realizar Cadastro</h2>
        <p>
          Este cadastro é restrito a colaboradores autorizados da Faculdade Católica da Paraíba.
        </p>

        <div className="inputs">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Digite um username"
            required
          />

          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome completo"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
          />

          <label htmlFor="cargo">Cargo</label>
          <select name="cargo" id="cargo">
            <option value="">Selecione seu cargo</option>
            <option value="coordenador">Coordenador</option>
            <option value="suporte">Suporte</option>
            <option value="tecnico">Técnico</option>
          </select>

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            required
          />

          <label htmlFor="confirmarSenha">Confirmar senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirme sua senha"
            required
          />
        </div>

        <button type="submit" className="btn-cadastro">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
