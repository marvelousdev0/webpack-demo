import { lazy, Suspense } from 'react';
import { useRoutes } from 'hookrouter';
import Nav from '../components/Nav';
import { routes } from '../utils/routes';

const NotFound = lazy(() => import(/*webpackChunkName: 'notFound' */ '../pages/NotFound'));

export default function App() {
  const routeResult = useRoutes(routes);
  console.log(routeResult);
  return (
    <>
      <Nav />
      {routeResult || (
        <Suspense fallback={null}>
          <NotFound />
        </Suspense>
      )}
    </>
  );
}
