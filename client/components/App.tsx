import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../home';

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" >
                    <Route index element={<>1st level</>} />
                  <Route path="authenticated">
                    <Route index element={<>test-</>} />
                  </Route>
              </Route>              
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
