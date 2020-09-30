import React, { Component } from 'react'
import { connect } from 'react-redux'


 class Book extends Component {
     
    render() {
        if(this.props.selectedBook === null){
            return <div>No book Selected</div>
        }
        const book = this.props.selectedBook
        return (
            <div className="bookHolder">
                <h2 className="bookTitle">{book.best_book.title}</h2>
                <div className="row">
                    <div>
                        <img src={book.best_book.image_url} ></img>
                    </div>
                    <div className="info"> Author(s):  {book.best_book.author.name}</div>
                    <div className="info">Rating {book.average_rating}</div>
                    <div className="info"> {book.text_reviews_count} Reviews</div>
                   
                    <p className="description" dangerouslySetInnerHTML={{ __html:book.description}}></p>
                   
                </div>
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

const BookComponent= connect(mapStateToProps,null)(Book)
export default BookComponent

