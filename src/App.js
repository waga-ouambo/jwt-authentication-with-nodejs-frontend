 import './App.css'; 
import Home from './components/Home';
import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm'; 
import RegisterForm from './components/registerForm';
import {Route, Switch, Redirect} from 'react-router-dom';
import Page404 from './components/Page404';
import './components/Spinner/Spinner.css';


function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
      <Header/>
             <div className="page-header header-filter" style={{"backgroundImage":"url('../assets/img/bg7.jpg')","backgroundSize":"cover","backgroundPosition":"top center"}}>
          <div className="container">
                <div className="row"> 
                <Switch>   
                    <Route path="/home" exact component={Home}/>
                    <Route path="/login" exact component={LoginForm}/>
                    <Route path="/register" exact component={RegisterForm}/>
                    <Route path="/404" component={Page404}/>
                    <Redirect from="/" exact to="/home" /> 
                    <Redirect from="*" to="/404" /> 
                </Switch>
                </div>
        </div>
    </div>
      </div> 
      </BrowserRouter>
  );
}

export default App;
