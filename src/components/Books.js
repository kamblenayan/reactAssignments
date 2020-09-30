import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showBook } from '../actions';


 class Books extends Component {

    showSelectedBook =(e)=>{
       const book = JSON.parse(e.target.id)
         this.props.showBook(book)
    }
   
    render() {
        const booksArray = this.props.books

        return (
          <div>
             {booksArray.map((book)=>(
                <div className="bookItem" key={book.id} onClick={this.showSelectedBook}>
                    <img src={book.best_book.image_url} id={JSON.stringify(book)}></img>
                    <div className="bookName"> {book.best_book.title}</div>
                </div>
             ))
             } 
          </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        books : state.books,
        selectedBook:state.selectedBook
    }
}

function mapDispatchToProps(dispatch){
    return { showBook: book => dispatch(showBook(book))}
}
const BooksComponent = connect(mapStateToProps,mapDispatchToProps,null)(Books)
export default BooksComponent