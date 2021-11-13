import { Route, Routes } from 'react-router';
import { LOGIN_PATH } from '../contacts/routs';
import { LoginPage } from '../Pages/auth/LoginPage';

export const LoginPageRoute = () => {
  return (
    <Routes>
      <Route exact path={LOGIN_PATH} element={<LoginPage />} />
    </Routes>
  );
};
