
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './modules/Landing.jsx'
import Developer from './modules/Developer.jsx'
import Writer from './modules/Writer.jsx'
import './index.css'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/developer" element={<Developer />}></Route>
            <Route path="/writer" element={<Writer />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
