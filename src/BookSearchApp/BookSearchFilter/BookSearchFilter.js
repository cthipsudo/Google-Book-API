import React, { Component } from 'react';

class BookSearchFilter extends Component {
    changeSelection(value) {
    // if(value === "None") {
    //   this.props.changeHandler(null);
    // } else {
    //   // find the country selected
    //   const country = this.props.countries.find(country => country.name === value);
    //   this.props.changeHandler(country);
    // }
  }
  render() {
    // const options = this
    //       .props
    //       .countries
    //       .map(
    //         (country, i) => <option value={country.name} key={i}>{country.name}</option>
    //       );
    return (
      <div className="country_selector">
        <form>
          <label htmlFor="printType">Print Type:</label>
          <select 
          id="printType" 
          name="printType">
            <option value="None">All</option>
          </select>
          <label htmlFor="bookType">Book Type:</label>
          <select 
          id="bookType" 
          name="bookType">
            <option value="None">No Filter</option>
          </select>
        </form>
      </div>
    );      
  }
}

BookSearchFilter.defaultProps = {
  countries: []
};

export default BookSearchFilter;