import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './comps/Navbar'
import BookDetails from './comps/BookDetails'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div>
        <Route path='/' exact={true} component={App} />
        <Route path='/volumes/:id' exact={true} component={BookDetails} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);