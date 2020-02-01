import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../services/Api';
import style from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    API.getMovies().then(res => this.setState({ movies: res.data.results }));
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <p className={style.home_title}>Trending films today</p>
        <ul className={style.movie_list}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link className={style.list_name} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default HomePage;
