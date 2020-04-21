import React from "react";

class SearchForm extends React.Component {
  submitForm = (ev) => {
    ev.preventDefault();
    this.props.searching(true);
    const lang = ev.target.elements.lang.value;
    const city = ev.target.elements.city.value;

    fetch(`https://github-jobs-proxy.appspot.com/positions?description=${lang}&location=${city}`)
      .then(res => res.json())
      .then(data => {
        this.props.updateData(data);
        this.props.searching(false);
      });
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" name="lang" placeholder="Programming Language" />
        <input type="text" name="city" placeholder="City" />
        <button>Search</button>
      </form>
    )
  }
}

export default SearchForm;