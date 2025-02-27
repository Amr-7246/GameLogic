import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/redux/store'; 
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App