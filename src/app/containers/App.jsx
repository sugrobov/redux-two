
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../root';

import '../../App.css';
import Content from '../components/Content';
import Add from '../containers/Add';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Root />,
    children: [
      {
        path: '/products',
        element: <Content />
      },
      {
        path: '/add',
        element: <Add />
      }
    ]
  }
])

function App() {

  return <RouterProvider
    router={router}
  />

}

export default App;
