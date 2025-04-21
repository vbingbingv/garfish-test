import { useMemo } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { About, Home } from './demo.tsx';

interface RootComponentProps {
  basename?: string;
}

export function RootComponent(props: RootComponentProps) {
  const router = useMemo(() => {
    return createBrowserRouter(
      [
        {
          path: '/',
          index: true,
          element: <Home />,
        },
        {
          path: '/about/*',
          element: <About />,
        },
      ],
      {
        basename: props.basename || '/',
      },
    );
  }, [props.basename]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
