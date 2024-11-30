import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import FindMovies from "./pages/FindMovies";
import MovieDisplay from "./pages/MovieDisplay";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Route path="/" exact render={() => <Landing></Landing>} />
      <Route path="/find-movies/:search" component={FindMovies}></Route>
      <Route path="/movie-display/:id" component={MovieDisplay}></Route>
    </BrowserRouter>
  );
}

export default App;
