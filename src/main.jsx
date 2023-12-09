import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home file/Home.jsx';
import Login from './Authntication file/Login.jsx';
import Regestation from './Authntication file/Regestation.jsx';
import AviableFoods from './Aviable foods file/AviableFoods.jsx';
import AddFoods from './Add foods/AddFoods.jsx';
import ErrorPaige from './Error paige file/ErrorPaige.jsx';
import AuthProvider from './Authintication file/AuthProvider.jsx';
import CardDettles from './Card Dettles/CardDettles.jsx';
// import ManageMyFood from './Manage my food file/ManageMyFood.jsx';
import FoodRequst from './FoodRequst file/FoodRequst.jsx';
import PraivetRoute from './Praivet Route File/PraivetRoute.jsx';
import TableApp from './Manage my food file/TableApp.jsx';
import ManageSingelTable from './Manage singel Table Requst file/ManageSingelTable.jsx';
import ManageTable from './Manage my food file/ManageTable.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPaige></ErrorPaige>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/regstation',
        element: <Regestation></Regestation>
      },
      {
        path: '/aviableFoods',
        element: <AviableFoods></AviableFoods>
      },
      {
        path: '/addfoods',
        element: <PraivetRoute><AddFoods></AddFoods></PraivetRoute>
      },
      {
        path: '/cardDettals/:id',
        element: <CardDettles></CardDettles>
      },
      // {
      //   path: '/managemyfoods',
      //   element: <PraivetRoute><ManageMyFood></ManageMyFood></PraivetRoute>,
      //   loader: () => fetch(' http://localhost:5000/addFood')
      // },
      {
        path: '/managemyfoods',
        element: <PraivetRoute><TableApp></TableApp></PraivetRoute>,
        loader: () => fetch(' http://localhost:5000/addFood')
      },
      {
        path: '/foodRequest',
        element: <PraivetRoute><FoodRequst></FoodRequst></PraivetRoute>
      },
      {
        path: '/manageSingelFood/:id',
        element: <ManageSingelTable></ManageSingelTable>,
        loader: ({ params }) => fetch(` http://localhost:5000/addFood/${params.id}`)
      },
      {
        path: '/manageTable/:id',
        element: <ManageTable></ManageTable>,
        loader: ({ params }) => fetch(` http://localhost:5000/addFood/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
