import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import NotFound from './components/NotFound/NotFound';
import ChatContainer from './components/Chat/ChatComponents/ChatContainer/ChatContainer';
import routes from './utils/appRoutes';

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
      <ChatContainer />
    </Router>
  );
};

export default App;
