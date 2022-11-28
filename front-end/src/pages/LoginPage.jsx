import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  return (
    <main className="bg-gray-200">
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
      </div>

      <LoginForm />

      <Footer />
    </main>
  );
}

export default Login;
