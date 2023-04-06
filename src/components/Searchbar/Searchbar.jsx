import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import Notiflix from 'notiflix';

import {
  Header,
  SearchForm,
  SearchFormButton,
  // FormBtnLabel,
  FormInput,
} from './Searchbar.styled';
export class Searchbar extends Component {
  state = {
    nameValue: '',
  };

  hendleInput = event => {
    this.setState({ nameValue: event.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = event => {
    event.preventDefault();

    if (this.state.nameValue.trim() === '') {
      Notiflix.Notify.failure('Please enter the word');
      // alert('Please enter the word');

      return;
    }

    this.props.onSubmit(this.state.nameValue);
  };
  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.hendleSubmit}>
          <SearchFormButton type="submit">
            <FaSearch />
          </SearchFormButton>

          <FormInput
            name="nameValue"
            value={this.state.nameValue}
            onChange={this.hendleInput}
            type="text"
            autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {};
