import React from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import Contant from './Components/Contant';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: null,
      isSearch: false
    };
  }

  updateSearchData = (data) => {
    this.setState({
      searchData: data
    });
  }

  searching = (isSearch) => {
    this.setState({
      isSearch: isSearch
    });
  }

  render() {
    return (
      <div className="App" >
        <h1>Github Jobs</h1>
        <SearchForm updateData={this.updateSearchData} searching={this.searching} />
        <hr />
        <Contant data={this.state.searchData} isSearch={this.state.isSearch} />
      </div>
    );
  }
}

export default App;
