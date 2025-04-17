import Garfish from 'garfish';
import { useEffect, useMemo } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { Home, Sub1 } from './demo.tsx';

interface RootComponentProps {
  basename?: string;
}

export function RootComponent(props: RootComponentProps) {
  console.log('RootComponent', props);
  console.log('window.test', window.test);
  console.log('localStorage', localStorage);
  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: '/',
        index: true,
        element: <Home />,
      },
      {
        path: '/sub-vue3/*',
        element: <Sub1 />,
      },
    ]);
  }, []);
  useEffect(() => {
    Garfish.run({
      basename: props.basename || '/',
      apps: [
        {
          name: 'sub-vue3',
          entry: 'http://localhost:3003',
          domGetter: '#sub-vue3',
          activeWhen: '/sub-vue3',
          props: {
            a: 1,
            b: 2,
          },
          sandbox: {
            snapshot: false,
            fixBaseUrl: false,
            fixStaticResourceBaseUrl: true,
          },
        },
      ],
    });
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
