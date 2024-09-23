import Nav from "./components/NavBar";
import Pic from "./pages/Profile";
import Con from "./pages/Contact";
import Photo from "./pages/Profile";
const App = () =>{
  return(
    <>
    <div className="h-screen w-screen bg-[#C4DAD2] flex flex-col">
        <Nav></Nav>
        <Pic></Pic>

        {/* <Con></Con> */}
    </div>
    </>
  )
}
export default App