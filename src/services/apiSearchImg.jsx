import axios from 'axios';

// export class PixabayFetchFunc {
//   constructor(BASE_URL, API_KEY) {
//     this.BASE_URL = BASE_URL;
//     this.API_KEY = API_KEY;
//   }
//   searchPhotos(searchQuery, searchPage) {
//     axios.defaults.baseURL = this.BASE_URL;
//     let searchPer_page = 12;
//     let url = `?q=${searchQuery}&page=${searchPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${searchPer_page} `;
//     axios
//       .get(url)
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
// }

export function PixabayFetchFunc() {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '23145424-17de0e2191faefedd106abc58';
  axios.defaults.baseURL = BASE_URL;

  const searchPhotos = (searchQuery, searchPage) => {
    axios.defaults.baseURL = this.BASE_URL;

    let url = `?q=${searchQuery}&page=${searchPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    axios
      .get(url)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

// import axios from 'axios';
// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '23145424-17de0e2191faefedd106abc58';

// axios.defaults.baseURL = BASE_URL;

// console.dir(axios);
// // // import { Component } from 'react';

// const getImages = async (searchQuery, page) => {

//     try {
//          const resultRequest = await axios.get(`${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
//         return  resultRequest;

//   } catch (err) {
//     throw err;
//     }
//  };

// export default getImages;

// getUsers()
//   .then(users => console.log(users))
//   .catch(error => console.log(error))
