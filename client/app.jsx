import React from 'react';
import Home from './pages/home';
import parseRoute from './lib/parse-route';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    }
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const route = parseRoute(window.location.hash);
      this.setState({
        route
      });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home/>;
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
          {this.renderPage()}
        <Footer/>
      </div>
    )
  }
}
