import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./styles.css";
import LoadingPage from './components/LoadingPage';
import Helmet from 'react-helmet';

const HomePage = lazy(() => import('./pages/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))

export default function App() {
  return (
    <>
    <Helmet>
      <title>Home - {process.env.REACT_APP_TITLE}</title>
    </Helmet>

      <Router>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/login" component={LoginPage}></Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}
