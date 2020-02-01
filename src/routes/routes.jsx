import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage'),
);
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export default {
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },
  MOVIE_DETAILS_PAGE: {
    path: '/movies/:movieId',
    component: MovieDetailsPage,
  },
  MOVIES_PAGE: {
    path: '/movies',
    component: MoviesPage,
  },
  CAST: {
    path: '/movies/:movieId/cast',
    component: Cast,
  },
  REVIEWS: {
    path: '/movies/:movieId/reviews',
    component: Reviews,
  },
  NOTFOUND: {
    component: NotFound,
  },
};
