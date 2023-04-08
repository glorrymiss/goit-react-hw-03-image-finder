import React, { Component } from 'react';
import Notiflix from 'notiflix';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

import { Loader } from './Loader/Loader';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    nameValue: '',
    error: null,
    page: 1,
    perPage: 12,
    hasBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.nameValue !== this.state.nameValue ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      fetch(
        `https://pixabay.com/api/?q=${this.state.nameValue}&page=${this.state.page}&key=33635231-9592dead0045fe81be9248485&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`Sorry, not found`));
        })

        .then(data => {
          if (data.hits.length <= 0) {
            Notiflix.Notify.failure(
              ' Find nothing... Please input correct value'
            );

            return;
          }

          //   const pages = Math.ceil(data.totalHits / this.state.perPage);
          //   this.setState(({ images, page, loading }) => ({
          //     images: [...images, ...data.hits],
          //     page: pages,
          //     loading: true,
          //   }));
          // })

          if (prevState.nameValue !== this.state.nameValue) {
            // this.setState(prevState => ({ page: (prevState.page = null) }));
            this.setState({ page: 1, images: data.hits, hasBtn: true });
          }

          if (prevState.page !== this.state.page) {
            this.setState({
              images: [...prevState.images, ...data.hits],
            });
            const pages = Math.ceil(data.totalHits / this.state.perPage);
            if (this.state.page === pages) this.setState({ hasBtn: false });
          }
        })

        .catch(error => this.setState({ error }))

        .finally(() => this.setState({ isLoading: false }));
    }
  }

  hendleLoad = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  hendleTakeSubmit = nameValue => {
    this.setState({ nameValue });

    this.setState({ images: [] });
  };

  render() {
    const { images, isLoading, hasBtn } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.hendleTakeSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && hasBtn && <Button onChange={this.hendleLoad} />}
        {isLoading && <Loader />}
      </Container>
    );
  }
}
