import { LoginForm } from '../../components/Forms/LoginForms';

export const LoginPage = (props) => {
  return (
    <div id="login-container" className="column column  ">
      <div className="column ">
        <p>Use this :</p>
        <code> "email": "eve.holt@reqres.in", "password": "cityslicka"</code>
      </div>

      <LoginForm />
    </div>
  );
};
