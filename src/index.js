import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Header from './components/Header';
import SideNav from './components/SideNav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <SideNav />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <App />
            </main>
          </div>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
);
