import { LoginForm } from '../../components/Forms/LoginForms';

export const LoginPage = (props) => {
  return (
    <div className="column column has-background-grey-lighter">
      <div className="column">
        <p>For example</p>
        {/* <code>"email": "eve.holt@reqres.in"</code>
        <code>"password": "cityslicka"</code> */}
      </div>

      <LoginForm />
    </div>
  );
};
