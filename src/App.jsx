import { Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import News from "./Pages/News.jsx"
import "./styles/App.css"

function App() {
  return (
    <>
      
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/news">news</Link>
        </nav>
  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  )

}
export default App;