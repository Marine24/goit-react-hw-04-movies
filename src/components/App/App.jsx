import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes/routes';
import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/Loader';

const App = () => (
  <div>
    <Navigation />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          path={routes.HOME_PAGE.path}
          exact
          component={routes.HOME_PAGE.component}
        />
        <Route
          path={routes.MOVIE_DETAILS_PAGE.path}
          component={routes.MOVIE_DETAILS_PAGE.component}
        />
        <Route
          path={routes.MOVIES_PAGE.path}
          component={routes.MOVIES_PAGE.component}
        />
        <Route component={routes.NOTFOUND.component} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
