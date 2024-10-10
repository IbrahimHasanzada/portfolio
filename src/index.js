import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import './CSS/style.css'
import { RouterProvider } from 'react-router-dom';
import route from './Router/route'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={route} />
);
