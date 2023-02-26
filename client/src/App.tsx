import Navbar from './layouts/RootLayout';
import FloorPlan from './pages/FloorPlan';
import './App.scss';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
  RouterProvider,
} from 'react-router-dom';
import OrderScreen from './pages/OrderScreen';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='' element={<FloorPlan />} />
      <Route path='order/:tableId' element={<OrderScreen />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
