import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar'
import FirstImgContainer from './FirstImgContainer';
import SecondContainer from './SecondContainer';
import ThirdContainer from './ThirdContainer';
import FourthContainer from './FourthContainer';
import FifthContainer from './FifthContainer';
import  SixthContainer from './SixthContainer';
import SeventhContainer from './SeventhContainer';

import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <div id="all-links">
    <Navbar />
    <FirstImgContainer />
    <SecondContainer />
    <ThirdContainer />
    <FourthContainer />
    <FifthContainer />
    < SixthContainer  />
    <SeventhContainer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
