import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './store/index.ts'
import { Provider } from 'react-redux'
import { HashRouter } from "react-router-dom";
import './index.css'
import 'virtual:windi.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
)
