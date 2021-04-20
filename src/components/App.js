import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';

const App = () => {
  return (
    <div className='bg-pink-50'>
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
