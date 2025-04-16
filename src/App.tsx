import './App.css';
import Garfish from 'garfish';
import { useEffect, useMemo } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { Home, Sub1, Sub2 } from './demo.tsx';

const App = () => {
  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/sub1/*',
        element: <Sub1 />,
      },
      {
        path: '/sub2/*',
        element: <Sub2 />,
      },
    ]);
  }, []);
  useEffect(() => {
    window.test = 'main';
    Garfish.run({
      basename: '/',
      apps: [
        {
          name: 'sub1',
          entry: 'http://localhost:3000',
          domGetter: '#sub1',
          activeWhen: '/sub1',
          props: {
            a: 1,
            b: 2,
          },
          sandbox: {
            snapshot: true,
            fixBaseUrl: false,
            fixStaticResourceBaseUrl: true,
            modules: [
              () => ({
                override: {
                  localStorage: window.localStorage,
                },
              }),
            ],
          },
        },
        {
          name: 'sub2',
          entry: 'http://localhost:3001',
          domGetter: '#sub2',
          activeWhen: '/sub2',
          props: {
            a: 1,
            b: 2,
          },
          sandbox: {
            snapshot: false,
            fixBaseUrl: false,
            fixStaticResourceBaseUrl: true,
            modules: [
              () => ({
                override: {
                  localStorage: window.localStorage,
                },
              }),
            ],
          },
        },
        {
          name: 'sub3',
          entry: 'http://localhost:3002',
          domGetter: '#sub3',
          activeWhen: '/sub3',
          props: {
            a: 1,
            b: 2,
          },
          sandbox: {
            snapshot: false,
            fixBaseUrl: false,
            fixStaticResourceBaseUrl: true,
            modules: [
              () => ({
                override: {
                  localStorage: window.localStorage,
                },
              }),
            ],
          },
        },
      ],
    });
  }, []);

  return (
    <div className="content">
      <h1>Rsbuild with React 主应用 main</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
