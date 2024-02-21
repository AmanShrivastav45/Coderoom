import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Learn from "./pages/Learn/Learn.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Github, { githubInfoLoader } from "./pages/Github/Github.jsx";
import Problems from "./pages/Problems/Problems.jsx";
import Ide from "./pages/Ide/Ide.jsx";
import Signup from "./pages/Authentication/Signup.jsx";
import Login from "./pages/Authentication/Login.jsx"
import Quiz from "./quiz/quiz.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "learn",
        element: <Learn />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "problems",
        element: <Problems />,
      },
      {
        path: "ide",
        element: <Ide />,
      },
    ],
  },
  {
    path: "signup",
    element: <Signup />,
  },
  ,
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/assess.coderoom",
    element: <Quiz />,
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route
//       loader={githubInfoLoader}
//       path='github'
//       element={<Github />}
//        />
//        <Route path='problems' element={<Problems/>} />
//        <Route path='ide' element={<Ide/>} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
