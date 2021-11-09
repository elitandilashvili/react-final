import { Route, Routes } from 'react-router';
import * as route from './contacts/routs';
import { LoginPage } from './Pages/auth/LoginPage';
import { Home } from './Pages/home/Home';
import { PrivateComponent } from './Elements/private-component/PrivateComponent';
import { PrivatePage } from './Pages/private-page/PrivatePage';

export function Components(props) {
  return (
    <Routes>
      <Route path={route.HOME_PATH} element={<Home />} exact></Route>

      <Route path={route.LOGIN_PATH} element={<LoginPage />}></Route>

      <Route
        path={route.DOCUMENTATION_PATH}
        element={
          <PrivateComponent Component={PrivatePage} title=" Secure Component" />
        }
      ></Route>
    </Routes>
  );
}
