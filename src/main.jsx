import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { articleApi } from './Features/api/ArticleApi'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ApiProvider api={articleApi}>
        <App />
      </ApiProvider>
    </Router>
  </React.StrictMode>,
)
