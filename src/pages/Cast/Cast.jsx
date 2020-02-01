import React, { Component } from 'react';
import T from 'prop-types';
import * as API from '../../services/Api';
import style from './Cast.module.css';

class Cast extends Component {
  static propTypes = {
    match: T.shape({
      params: T.shape({
        movieId: T.string,
      }),
    }).isRequired,
  };

  state = {
    movie: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    API.getCast(movieId).then(res => this.setState({ movie: res.data.cast }));
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        <ul className={style.list}>
          {movie.map(el => (
            <li key={el.id} className={style.list_item}>
              <img
                className={style.photo}
                src={`https://image.tmdb.org/t/p/w300${el.profile_path}`}
                alt=""
              />
              <p>{el.name}</p>
              <p>{el.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
