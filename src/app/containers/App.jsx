
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../root';

import '../../App.css';

const router = createBrowserRouter([{ path: '/', element: <Root /> }])

function App() {

  return <RouterProvider
    router={router}
  />

}

export default App;
