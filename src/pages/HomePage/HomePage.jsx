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
      <div className={style.container}>
        <p className={style.home_title}>trending films today</p>
        <ul className={style.movie_list}>
          {movies.map(movie => (
            <li className={style.list_item} key={movie.id}>
              <Link to={`/movies/${movie.id}`} className={style.list_item_link}>
                <p className={style.list_name_title}>{movie.title}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt=""
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default HomePage;
