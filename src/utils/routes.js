import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import(/*webpackChunkName: 'home' */ '../pages/Home'));
const About = lazy(() => import(/*webpackChunkName: 'about' */ '../pages/About'));
const Overview = lazy(() => import(/*webpackChunkName: 'overview' */ '../pages/Overview'));
const Contact = lazy(() => import(/*webpackChunkName: 'contact' */ '../pages/Contact'));

export const routes = (
  <Switch>
    <Route path='/'>
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    </Route>
    <Route path='/about'>
      <Suspense fallback={null}>
        <About />
      </Suspense>
    </Route>
    <Route path='/overview'>
      <Suspense fallback={null}>
        <Overview />
      </Suspense>
    </Route>
    <Route path='/contact'>
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </Route>
  </Switch>
);
