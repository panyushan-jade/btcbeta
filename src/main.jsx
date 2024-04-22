import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
