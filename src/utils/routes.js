import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';

const Home = loadable(() => import(/*webpackChunkName: 'home' */ '../pages/Home'), {
  fallback: <div>Loading...</div>,
});
const About = loadable(() => import(/*webpackChunkName: 'about' */ '../pages/About'), {
  fallback: <div>Loading...</div>,
});
const Overview = loadable(() => import(/*webpackChunkName: 'overview' */ '../pages/Overview'), {
  fallback: <div>Loading...</div>,
});
const Contact = loadable(() => import(/*webpackChunkName: 'contact' */ '../pages/Contact'), {
  fallback: <div>Loading...</div>,
});

export const routes = (
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/overview'>
      <Overview />
    </Route>
    <Route path='/contact'>
      <Contact />
    </Route>
  </Switch>
);
