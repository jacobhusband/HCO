import React from 'react';
import Home from './pages/home';
import parseRoute from './lib/parse-route';
import NavbarCustom from './components/navbar';
import Footer from './components/footer';
import Contact from './pages/contact';
import About from './pages/about';
import Faq from './pages/faq';
import Inventory from './pages/inventory';
import Login from './pages/login';
import Admin from './pages/admin';
import NewEntry from './pages/new_entry';
import '../server/public/reset.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../server/public/styles.scss';
import '../server/public/primary.scss';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      checkedForLogin: false,
      user: null,
    }
    this.renderPage = this.renderPage.bind(this);
    this.checkForLogin = this.checkForLogin.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      const route = parseRoute(window.location.hash);
      this.setState({
        route
      });
    });
  this.checkForLogin();
  }

  checkForLogin() {
    this.setState({
      user: JSON.parse(localStorage.getItem('user')),
      checkedForLogin: true
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '' || route.path === 'home') return <Home/>;
    else if (route.path === 'contact') return <Contact/>;
    else if (route.path === 'about') return <About/>;
    else if (route.path === 'faq') return <Faq/>;
    else if (route.path === 'inventory') {
      const key = route.params.keys().next().value
      if (key) return <Inventory subview={key}/>
      return <Inventory subview="sofas"/>;
    }
    else if (route.path === 'admin') return <Login/>;
    else if (route.path === 'admin_panel') return <Admin user={this.state.user}/>;
    else if (route.path === 'new_entry') return <NewEntry/>;
  }

  render() {
    if (!this.state.checkedForLogin) return;

    const content =
    (this.state.route.path === 'admin' ||
     this.state.route.path === 'admin_panel' ||
     this.state.route.path === 'new_entry')
     ? this.renderPage()
     : (this.state.route.path === 'home' ||
        this.state.route.path === '' ||
        this.state.route.path === 'inventory')
     ? (
        <>
          <NavbarCustom width='full'/>
            {this.renderPage()}
          <Footer width='full'/>
        </>
       )
     : (
        <>
          <NavbarCustom/>
            {this.renderPage()}
          <Footer/>
        </>
       )

    return (
      <>
        {content}
      </>
    )
  }
}
