import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import T from 'prop-types';
import SearchForm from '../../components/SearchPage/SearchPage';
import * as API from '../../services/Api';
import styles from './MoviesPage.module.css';

class MoviesPage extends Component {
  static propTypes = {
    history: T.shape({
      push: T.func,
    }).isRequired,
    location: T.shape({
      search: T.string,
    }).isRequired,
    match: T.shape({
      url: T.string,
    }).isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    if (location.search) {
      const searchParams = new URLSearchParams(location.search).get('query');
      this.search(searchParams);
    }
  }

  search = query => {
    API.searchMovie(query).then(res =>
      this.setState({ movies: res.data.results }),
    );
    const { history } = this.props;
    history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { match, location } = this.props;
    return (
      <div>
        <SearchForm onSubmit={this.search} />
        <ul className={styles.list}>
          {movies.map(el => (
            <li key={el.id}>
              <Link
                className={styles.list_item}
                to={{
                  pathname: `${match.url}/${el.id}`,
                  state: { from: { ...location } },
                }}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
