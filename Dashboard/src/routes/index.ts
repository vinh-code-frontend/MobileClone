import { createBrowserRouter } from 'react-router';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import MainLayout from '../layouts/MainLayout/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      // { path: 'about', Component: About },
      {
        path: 'auth',
        Component: AuthLayout,
        children: [
          // { path: 'login', Component:  },
          // { path: 'register', Component: Register }
        ]
      }
      // {
      //   path: 'concerts',
      //   children: [
      //     { index: true, Component: ConcertsHome },
      //     { path: ':city', Component: ConcertsCity },
      //     { path: 'trending', Component: ConcertsTrending }
      //   ]
      // }
    ]
  }
]);

export default router;
