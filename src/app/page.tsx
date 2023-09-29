import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar/>
        <Home/>
      <Footer/>
    </div>
  )
}
