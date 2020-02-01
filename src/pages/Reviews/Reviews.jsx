import React, { Component } from 'react';
import T from 'prop-types';
import * as API from '../../services/Api';
import style from './Reviews.module.css';

class Reviews extends Component {
  static propTypes = {
    match: T.shape({
      url: T.string,
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
    API.getReview(movieId).then(res =>
      this.setState({ movie: res.data.results }),
    );
  }

  render() {
    const { movie } = this.state;

    return (
      <>
        {!movie.length && <p>There is no any review for this movie</p>}

        <div>
          <ul className={style.list}>
            {movie.map(el => (
              <li key={el.id}>
                <p className={style.review_name}>{el.author}</p>
                <p className={style.review_text}>{el.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Reviews;
