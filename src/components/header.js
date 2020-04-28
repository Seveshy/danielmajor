import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby';

class Header extends Component {
  state = {
    isMenuOpen: false,
  
  }

  handleMenu = () => {
    this.setState((previousState) => ({ 
      isMenuOpen: !previousState.isMenuOpen,
     }));
  }

  clseMenu = () => {
    this.setState({ isMenuOpen: false });
  }

  render = () => {
    const { siteTitle } = this.props;
    const { isMenuOpen } = this.state;
    const burgerClass = isMenuOpen ? 'is-active' : '';
    
    return (
      <nav className="navbar has-background-black-ter">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item is-size-4 has-text-light" to="/">
            {siteTitle}
          </Link>
          <a className={`navbar-burger ${burgerClass}`} 
              role="button"
              arial-label="menu"
              onClick={this.handleMenu} >
  
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
     
        <div className={`navbar-menu ${burgerClass} has-background-black-ter`}>
          <div className="navbar-end">
            <Link
             className="navbar-item is-size-5 has-text-light has-background-black-ter"
              to="/"
              onClick={this.closeMenu}
            >
              Home</Link>
            <Link 
              className="navbar-item is-size-5 has-text-light has-background-black-ter"
              to="/projects">Project</Link>
            <Link 
              className="navbar-item is-size-5 has-text-light has-background-black-ter"
              to="/blog">Blog
              </Link>
              <Link 
              className="navbar-item is-size-5 has-text-light has-background-black-ter"
              to="/stack">Stack
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }  
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
