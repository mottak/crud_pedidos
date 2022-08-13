import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <main>
      <h2>Login Page</h2>
      <LoginForm />
      <h6>Ainda não tem cadastro?</h6>
      <Link to="/register">
        <button type="button">Criar Cadastro</button>
      </Link>
    </main>
  );
}

export default Login;
