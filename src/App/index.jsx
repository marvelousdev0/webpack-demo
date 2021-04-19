import { lazy, Suspense } from 'react';
import { useRoutes } from 'hookrouter';
import { routes } from '../utils/routes';

const NotFound = lazy(() => import(/*webpackChunkName: 'notFound' */ '../pages/NotFound'));

export default function App() {
  const routeResult = useRoutes(routes);

  return (
    routeResult || (
      <Suspense fallback={null}>
        <NotFound />
      </Suspense>
    )
  );
}
