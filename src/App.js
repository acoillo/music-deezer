import React, { lazy, Suspense } from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import 'typeface-quicksand';
import '@fortawesome/fontawesome-free/css/all.css';

import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';

import './App.scss';

const web = lazy(() => import('./scenes/web'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Router>
          <Switch>
            <Route path='/' name='web' component={web} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
