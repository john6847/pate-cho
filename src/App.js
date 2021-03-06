import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const Hats = () => (
  <div>
      Hola
  </div>
);

function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop/hats' component={Hats}/>
          <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
