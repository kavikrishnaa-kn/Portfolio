import Nav from "./components/NavBar";
import Pic from "./pages/profile";
const App = () =>{
  return(
    <>
    <div className="h-screen w-screen bg-[#C4DAD2] flex flex-col">
        <Nav></Nav>
        <Pic></Pic>
    </div>
    </>
  )
}
export default App