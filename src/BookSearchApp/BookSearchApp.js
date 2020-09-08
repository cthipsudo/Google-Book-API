import React from 'react';
import BookSearchHeader from './BookSearchHeader/BookSearchHeader';
import BookSearchSearchBar from './BookSearchSearchBar/BookSearchSearchBar';
import BookSearchFilter from './BookSearchFilter/BookSearchFilter';
import BookSearchList from './BookSearchList/BookSearchList';

class BookSearchApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            books: [],
            searchTerm: "",
            printType: null,
            bookType: null,
            searched: null,
            error: null,
        }
    }
    componentDidMount(){
    }
    grabBookList = (searchTerm) => {
        const apiKey = "AIzaSyClro7mB7UgPkLUmKW-dI7Zh195Kp__-3M";
        console.log(searchTerm);
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`)
        .then(myRequest => {
            // check if response is ok
            console.log('About to check for errors');
            if (!myRequest.ok) {
                console.log('An error did occur, let\'s throw an error.');
                throw new Error('Something went wrong'); // throw an error
            }
            return myRequest.json(); // ok, so just continue
        })
        .then(myData =>{
            //console.log(myData);
            this.setState({
                books: myData.items
            });
        }).catch(err => {
            this.setState({
                error: err.message
            });
        });
    }
    handleSearchSubmit = (value) => {
        //console.log("You are trying to search for....", value);
        this.setState({
            searched: true
        });
        this.grabBookList(value);
    }
    render(){
        const error = this.state.error
            ? <div className="app__error">{this.state.error}</div>
            : "";
        return(
            <div>
                <BookSearchHeader />
                <BookSearchSearchBar onSearch={this.handleSearchSubmit}/>
                <BookSearchFilter />
                {error}
                <BookSearchList books={this.state.books} searched={this.state.searched}/>
            </div>
        );
    }
}

export default BookSearchApp;