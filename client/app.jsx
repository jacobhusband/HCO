import React from 'react';
import Home from './pages/home';
import parseRoute from './lib/parse-route';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Contact from './pages/contact';
import About from './pages/about';
import Faq from './pages/faq';
import Inventory from './pages/inventory';

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
    if (route.path === '') return <Home/>;
    else if (route.path === 'contact') return <Contact/>;
    else if (route.path === 'about') return <About/>;
    else if (route.path === 'faq') return <Faq/>;
    else if (route.path === 'inventory') return <Inventory/>;
  }

  render() {
    return (
      <>
        <Navbar/>
          {this.renderPage()}
        <Footer/>
      </>
    )
  }
}
