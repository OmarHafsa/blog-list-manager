import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import EditBlog from './EditBlog';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blog/:id">
              <BlogDetails/>
            </Route>
            <Route path="/edit/:id">
              <EditBlog/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
