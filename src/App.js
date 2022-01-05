import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import { fetchCat, fetchYe } from './service';
import Cats from './pages/cats';
import Quote from './pages/quote';
import About from './pages/About';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cat: '',
      quote: '',
      picUrl: ''
    };
  }

 getCat = () => {
    return fetchCat().then(data => {
      let cat = data.url;
      this.setState({cat: cat});
    });
 }

getQuote = () => {
  return fetchYe().then(data => {
    let quote = data.quote;
    this.setState({quote: quote, picUrl: 'https://picsum.photos/600/600?grayscale'});
  });
  
}

  render() {
    return (
      <div className="App">
        <header className="header">
          <nav>
            <ul>
              <li>
                <Link href="/cats">Cat-apult</Link>
              </li>
              <li>
                <Link to="/quotes">The only direction</Link>
              </li>
              <li>
                <Link to="/about">About this thing</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Route path="/quotes">
            <Quote getQuote={this.getQuote} quote={this.state.quote} picUrl={this.state.picUrl} />
          </Route>
          <Route path="/cats">
            <Cats getCat={this.getCat} cat={this.state.cat} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </main>
        
      </div>
    );
  }

}

export default App;
