import NewUserForm from '../components/NewUserForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Register() {
  return (
    <main>
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
      </div>
      <NewUserForm />
      <Footer />
    </main>
  );
}

export default Register;
