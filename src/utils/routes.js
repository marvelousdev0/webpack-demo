import { lazy, Suspense } from 'react';

const Home = lazy(() => import(/*webpackChunkName: 'home' */ '../pages/Home'));
const About = lazy(() => import(/*webpackChunkName: 'about' */ '../pages/About'));
const Overview = lazy(() => import(/*webpackChunkName: 'overview' */ '../pages/Overview'));
const Contact = lazy(() => import(/*webpackChunkName: 'contact' */ '../pages/Contact'));

export const routes = {
  '/': () => (
    <Suspense fallback={null}>
      <Home />
    </Suspense>
  ),
  '/about': () => (
    <Suspense fallback={null}>
      <About />
    </Suspense>
  ),
  '/overview': () => (
    <Suspense fallback={null}>
      <Overview />
    </Suspense>
  ),
  '/contact': () => (
    <Suspense fallback={null}>
      <Contact />
    </Suspense>
  ),
};
