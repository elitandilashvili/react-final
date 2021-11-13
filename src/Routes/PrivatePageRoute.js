import { Route, Routes } from 'react-router';
import { DOCUMENTATION_PATH } from '../contacts/routs';
import { PrivatePage } from '../Pages/private-page/PrivatePage';
import { PrivateComponent } from '../Elements/private-component/PrivateComponent';

export const PrivatePageRoute = () => {
  return (
    <Routes>
      <Route
        exact
        path={DOCUMENTATION_PATH}
        element={
          <PrivateComponent Component={PrivatePage} title=" Secure Component" />
        }
      />
    </Routes>
  );
};
