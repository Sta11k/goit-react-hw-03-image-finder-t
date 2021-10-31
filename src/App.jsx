import { Component } from 'react';
import './styles.css';

import fetchImages from './services/apiService';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    openModal: false,
    error: '',
  };

  maxPages = 0;
  fullImageURL = '';
  newElementHight = 0;

  componentDidUpdate(prevProps, prevState) {
    if (
      (prevState.searchQuery !== this.state.searchQuery &&
        this.state.searchQuery !== '') ||
      prevState.page !== this.state.page
    ) {
      this.searchImagesHandler();
      // this.scrollToHandler();
    }
    if (
      prevState.images.length !== this.state.images.length &&
      prevState.images.length !== 0
    ) {
      // console.log('scrollToHandler App DidUpdate');
      this.scrollToHandler();
    }
  }

  closeModal = () => {
    this.fullImageURL = '';
    this.setState({ openModal: false });
  };

  showImageHandler = imageUrl => () => {
    this.fullImageURL = imageUrl;
    this.setState({ openModal: true });
  };

  scrollToHandler = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 750);
  };

  searchImagesHandler = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true, error: '' });
    try {
      const result = await fetchImages(searchQuery, page);

      if (result.total !== 0) {
        this.maxPages = Math.ceil(result.totalHits / 12);

        this.setState(({ images }) => ({
          images: [...images, ...result.hits],
        }));
      } else {
        // console.log('Not found');
        this.setState(() => ({
          images: [],
          error: 'No results were found for your search.',
        }));
      }
    } catch (error) {
      console.error(error);
      this.setState(() => ({ error: error.toString() }));
    } finally {
      this.setState({ isLoading: false });

      // this.scrollToHandler();
    }
  };

  loadMoreHandler = () => {
    this.setState(() => ({
      page: Math.min(this.maxPages, this.state.page + 1),
    }));
  };

  onSubmitHandler = searchString => {
    this.maxPages = 0;

    this.setState(() => ({
      images: [],
      searchQuery: searchString,
      page: 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmitHandler} />
        {this.state.error ? (
          <p className="ErrorText">{this.state.error}</p>
        ) : (
          <ImageGallery
            images={this.state.images}
            showImageHandler={this.showImageHandler}
            scrollToHandler={this.scrollToHandler}
          />
        )}

        {this.state.isLoading && <Loader />}
        {this.state.page < this.maxPages && (
          <Button loadMoreHandler={this.loadMoreHandler} />
        )}
        {this.state.openModal && (
          <Modal
            fullImageURL={this.fullImageURL}
            onClose={this.closeModal}
          ></Modal>
        )}
      </div>
    );
  }
}

export default App;

// // import './App.css';
// import './styles.css';
// import { Component } from 'react';
// import Searchbar from './components/Searchbar/Searchbar';
// import axios from 'axios';
// console.dir(axios);
// // import PixabayFetchFunc from '../../services/apiSearchImg';
//     const searchQuery = 'dog';
// const searchPage = 1;
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '23145424-17de0e2191faefedd106abc58';
//   axios.defaults.baseURL = BASE_URL;

//   const searchPhotos = () => {
//      let url = `?q=${searchQuery}&page=${searchPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//     axios
//       .get(url)
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

// console.log("searchPhotos", searchPhotos(searchQuery, searchPage));

// class App extends Component {
//   // handlerSearchSubmit = () => {};
//   handlerSearchSubmit = searchForm => {
//     this.maxPages = 0;
//     // console.log(object);
//     this.setState(() => ({
//       images: [],
//       searchQuery: searchForm,
//       searchPage: 1,
//     }));
//   };

//  render() {
//     // console.log(BASE_URL);
//     return (
//       <div className="App">
//         <Searchbar onSubmit={this.handlerSearchSubmit} searchQuery={this.searchQuery} searchPage={this.searchPage} />
//         {/* <Searchbar /> */}
//       </div>
//     );
//   }
// }

// export default App;

// // https://github.com/flamesty/goit-react-hw-03-image-finder
// // https://learn-reactjs.ru/basics/forms
// // https://pixabay.com/api/docs/
// // https://github.com/mhnpd/react-loader-spinner
// // https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
// // let searchPage = 1;
// // let searchQuery = 'banana';
// // let searchPer_page = 12;
// // let url = `?q=${searchQuery}&page=${searchPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${searchPer_page} `;
// // let endpoint = 'searcItem';
// // console.dir(axios);

// // const searcItem = 'search';
// // const resultRequest = axios.get(
// //   `${BASE_URL}?q=${searcItem}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
// // );
