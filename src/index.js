import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import ShopLayout from "./shop-layout/shop-layout.js";
import BookstoreService from "./services/bookstore-service";
import { BookstoreServiceProvider } from "./services/bookstore-service-context";

import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <BookstoreServiceProvider value={bookstoreService}>
      <Router>
        <ShopLayout />
      </Router>
    </BookstoreServiceProvider>
  </Provider>,
  document.getElementById("root")
);
