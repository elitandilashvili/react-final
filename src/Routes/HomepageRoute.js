import { Route, Routes } from 'react-router';
import { Countries } from '../components/Country/Countries';
import { HOME_PATH } from '../contacts/routs';

export const HomepageRoute = (props) => {
  return (
    <Routes>
      <Route
        exact
        path={HOME_PATH}
        element={
          <Countries countries={props.data} searchTest={props.searchTest} />
        }
      />
    </Routes>
  );
};
