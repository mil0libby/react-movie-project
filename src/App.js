import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import FindMovies from "./pages/FindMovies";
import { useEffect, useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact render={() => <Landing></Landing>} />
      <Route path="/find-movies/:search" component={FindMovies}></Route>
    </BrowserRouter>
  );
}

export default App;
