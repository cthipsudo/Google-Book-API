import React from 'react';
import './BookSearchList.css';
class BookSearchAppList extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        //console.log(this.props.books);
        const books = this.props.books.map(book => {
            console.log(book);
            var authors = "";
            if(book.volumeInfo.authors !== undefined){
                authors = book.volumeInfo.authors.map( author => {
                    return <span>{author}</span>
                })
            }
            return <div className="book" key={book.id}>
                <div className="bookImage">
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="cover of the book" />
                </div>
                <div className="bookSection">
                    <h2>{book.volumeInfo.title}</h2>
                    <h3>Author(s):{authors}</h3>
                    <h3>Price: {}</h3>
                    <p>{book.volumeInfo.description}</p>
                </div>
            </div>;
        });
        const bookList = this.props.searched ? books: <p>Please search for a book</p>;
        return (
            <div className="bookList">
                {/* <span>Books Here...</span> */}
                {bookList}
            </div>
        );
    }
}

export default BookSearchAppList;