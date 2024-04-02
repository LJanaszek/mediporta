import React, { Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const TableSort = React.lazy(() => import('./components/Table'));
function App() {

  return (
    <div className="App">
      <Suspense fallback={<div>please wait until table fully load</div>}>
        <TableSort />
      </Suspense>
    </div>
  );
}

export default App;
