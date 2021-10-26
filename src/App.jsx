// import './App.css';
import './styles.css';
import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
// import PixabayFetchFunc from '../../services/apiSearchImg';

class App extends Component {
  // handlerSearchSubmit = () => {};
  handlerSearchSubmit = searchForm => {
    this.maxPages = 0;
    // console.log(object);
    this.setState(() => ({
      images: [],
      searchQuery: searchForm,
      page: 1,
    }));
  };

  render() {
    // console.log(BASE_URL);
    return (
      <div className="App">
        <Searchbar onSubmit={this.handlerSearchSubmit} />
        {/* <Searchbar /> */}
      </div>
    );
  }
}

export default App;

// https://github.com/flamesty/goit-react-hw-03-image-finder
// https://learn-reactjs.ru/basics/forms
// https://pixabay.com/api/docs/
// https://github.com/mhnpd/react-loader-spinner
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
// let searchPage = 1;
// let searchQuery = 'banana';
// let searchPer_page = 12;
// let url = `?q=${searchQuery}&page=${searchPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${searchPer_page} `;
// let endpoint = 'searcItem';
// console.dir(axios);

// const searcItem = 'search';
// const resultRequest = axios.get(
//   `${BASE_URL}?q=${searcItem}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
// );
