import React, { Component } from "react";

import BookListItem from "../book-list-item";
import Spinner from "../spinner";

import { fetchBooks, bookAddedToCart } from "../../actions";

import { withBookstoreService } from "../../services/hoc";
import { connect } from "react-redux";

import "./book-list.scss";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)} />
          </li>
        );
      })
    }
    </ul>
  );
}

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
    // const {
    //   bookstoreService,
    //   booksLoaded,
    //   booksRequested,
    //   booksError
    // } = this.props;
    //
    // booksRequested();
    // bookstoreService.getBooks()
    //   .then((data) => booksLoaded(data))
    //   .catch((err) => booksError(err));
  }

  render() {
    const { books, loading, onAddedToCart } = this.props;
    if (loading) return <Spinner />
    return <BookList books={books} onAddedToCart={onAddedToCart} />
  }
}

const mapStateToProps = ({ bookList: { books, loading, error }} ) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
};

export default withBookstoreService()(
  connect(mapStateToProps, mapDispatchToProps)(BookListContainer)
);
