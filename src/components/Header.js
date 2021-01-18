import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';



 class Header extends Component {  
 
    getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }
  render(){
console.log(this.props);
    return(
        <nav className="navbar navbar-expand-lg bg-primary" style={{marginBottom: '0px'}}>
            <div className="container">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                <span className="navbar-toggler-bar navbar-kebab" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={"nav-item " + this.getNavLinkClass("/home")}>
                    <NavLink to={{
                    pathname: '/home'
                    }} 
                    className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className={"nav-item " + this.getNavLinkClass("/login")}>
                    <NavLink
                    to={{
                        pathname: '/login'
                        }}  className="nav-link">Login</NavLink>
                    </li>
                    <li className={"nav-item " + this.getNavLinkClass("/register")}>
                    <NavLink
                    to={{
                        pathname: '/register'
                        }}  className="nav-link">Register</NavLink>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                </ul>
                </div>
            </div>
            
            </nav>
    )
  }
   
}

export default withRouter(Header);