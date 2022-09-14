import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>React Basic App</h1>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/posts/:id">
            <PostDetails />
          </Route>

          <Route path="/posts">
            <Posts />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
