import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        errorElement: <ErrorPage></ErrorPage>,
        element: <BookDetails></BookDetails>,
        loader: () => fetch('books.json')
      },
      {
        path: '/bookslist',
        errorElement: <ErrorPage></ErrorPage>,
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/chart',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PagesToRead></PagesToRead>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
