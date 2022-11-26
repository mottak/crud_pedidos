import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

function Login() {
  return (
    <main className="main-content  mt-0">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom" />
            <LoginForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Login;
