import '../styles/page.css';


export default function Login() {
  return (
    <div className="login-container">
      <div className="login-left"></div>
      <div className="login-right">
        <form className="form-box">
          <h2>Login</h2>
          <p>Se você já possui uma conta, pode fazer login com seu username e senha.</p>

          <div className="inputs">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Digite seu usuário" />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" placeholder="Digite sua senha" />
          </div>

          <div className="forgot-password">Esqueceu a senha?</div>

          <button type="submit" className="btn-submit">
            Acessar Conta
          </button>
        </form>
      </div>
    </div>
  );
}
