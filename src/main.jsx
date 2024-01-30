import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar'
import FirstImgContainer from './FirstImgContainer';
import SecondContainer from './SecondContainer';
import ThirdContainer from './ThirdContainer';
import FourthContainer from './FourthContainer';
import FifthContainer from './FifthContainer';
import SixthContainer from './SixthContainer';
import SeventhContainer from './SeventhContainer';
import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
// import {
//   ScrollingProvider,
//   useScrollSection,
//   Section,
// } from 'react-scroll-section';

const Home = () => {
  return (
    <div id="all-links">
      {/* <ScrollingProvider > */}
        <Navbar />
      {/* </ScrollingProvider> */}
      <FirstImgContainer />
      <SecondContainer />
      <ThirdContainer />
      <FourthContainer />
      <FifthContainer />
      < SixthContainer />
      <SeventhContainer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  //  {
  //   path: "/firstImgContainer",
  //   element: <FirstImgContainer />
  // }, {
  //   path: "/secondContainer",
  //   element: <SecondContainer />
  // }, {
  //   path: "/thirdContainer",
  //   element: <ThirdContainer />
  // }, {
  //   path: "/fourthContainer",
  //   element: <FourthContainer />
  // }, {
  //   path: "/fifthContainer",
  //   element: <FifthContainer />
  // }, {
  //   path: "/sixthContainer",
  //   element: < SixthContainer />
  // }, {
  //   path: "/seventhContainer",
  //   element: <SeventhContainer />
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
