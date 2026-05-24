import { Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import News from "./Pages/News.jsx"
import "./styles/App.css"
import Square from "./Pages/TicTacToe.jsx"
import Think from "./Pages/Think.jsx"

function App() {
  return (
    <>
      
        {/* <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/news">news</Link>
        </nav> */}
  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/tictactoe" element={<Square />} />
        <Route path="/Think" element = {<Think />} />
      </Routes>
    </>
  )

}
export default App;