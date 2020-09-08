import React from 'react';

class BookSearchBar extends React.Component {
    state = {
        search:""
    }
    searchChanged = (searchValue) => {
        this.setState({
            search: searchValue
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //Grab the value and pass it up
        this.props.onSearch(this.state.search);
    }
    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="bookSearch">Search:</label>
                    <input type="text" name="bookSearch" id="bookSearch" placeholder="bob" value={this.state.search} onChange={e => this.searchChanged(e.target.value)}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default BookSearchBar;