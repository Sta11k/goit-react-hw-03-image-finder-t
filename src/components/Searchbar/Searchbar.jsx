import { Component } from 'react';

class Searchbar extends Component {
  state = {
    value: '',
  };

  changeHandler = e => {
    this.setState({ value: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value.trim());
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.submitHandler}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeHandler}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
// import { React, Component } from 'react';
// // import PixabayFetchFunc from '../../services/apiSearchImg';
// class Searchbar extends Component {
//   state = {
//     value: '',
//   };
//   changeHandler = e => {
//     this.setState({ value: e.target.value });
//   };

//   submitHandler = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.value.trim().toLowerCase());
//   };

//   render() {
//     const { value } = this.state;
//     // console.log(value);
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.submitHandler}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             onChange={this.changeHandler}
//             value={value}
//             // autocomplete="off"
//             // autofocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;
