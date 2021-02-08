import React from 'react';
import { HashRouter, Route } from "react-router-dom";

import Home from "./routes/Home";
import List from "./routes/List";
import Header from "./components/Header";
import './App.css';


function App() {
  return (
    <HashRouter>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/List" component={List} />
    </HashRouter>
  );
}

export default App;
