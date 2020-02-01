import React, { Component } from 'react';
import T from 'prop-types';
import styles from './SearchPage.module.css';

class SearchPage extends Component {
  static propTypes = {
    onSubmit: T.func.isRequired,
  };

  state = {
    input: '',
  };

  onChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className={styles.search_input}
            value={value}
            onChange={this.onChange}
            type="text"
          />
          <button type="submit" className={styles.button}>
            <span>Search film</span>
          </button>
        </form>
      </div>
    );
  }
}

export default SearchPage;
