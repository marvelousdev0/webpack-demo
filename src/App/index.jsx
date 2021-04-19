import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';
import { routes } from '../utils/routes';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      {routes}
    </BrowserRouter>
  );
}
