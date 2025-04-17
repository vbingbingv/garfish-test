import React from 'react';
import ReactDOM from 'react-dom/client';
import { RootComponent } from './App';

import { reactBridge } from '@garfish/bridge-react-v18';

export const provider = reactBridge({
  el: '#root',
  rootComponent: RootComponent,
});

console.log(window.__GARFISH__);

// 当既作为子应用，也作为主应用时，注意 window.__GARFISH__ 为 true（只要引入了__GARFISH__就为true），此时需要设定一个独一无二的id来挂载，既可以单独启动，也可以作为子应用启动
const rootEl = document.getElementById('sub1-react-mount-id');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <RootComponent />
    </React.StrictMode>,
  );
}
