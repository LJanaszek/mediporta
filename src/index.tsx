import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './style.scss'

const App = React.lazy(()=>import("./App"))
const HeaderPage = React.lazy(()=>import("./layout/header"))
const FooterPage = React.lazy(()=>import("./layout/footer"))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div> please wait until page load</div>} >
      <HeaderPage />
      <App />
      <FooterPage />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
