import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import { router } from './router';
function App() {
  return (
    <>
     <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
