import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import './Pages.css';

function Login() {
  return (
    <main className="loginContainer">
      <img
        src="../../public/orange-shopcart.jpeg"
        alt="Desenho de carrinho de compras cor laranjada, com legumes dentro"
      />
      <LoginForm />
      <h6>Ainda não tem cadastro?</h6>
      <Link to="/register">
        <button type="button" className="btn btn-secondary btn-lg">
          Criar Cadastro
        </button>
      </Link>
    </main>
  );
}

export default Login;
