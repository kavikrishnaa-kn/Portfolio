import Nav from "./components/NavBar";
import Pic from "./pages/profile";
import Content from "./components/content";
const App = () =>{
  return(
    <>
    <div className="h-screen w-screen bg-[#6A9C89] flex flex-col">
      <div><Nav></Nav></div>
      <div className="">
        <Pic></Pic>
        <Content></Content>
      </div>
    
    </div>
    </>
  )
}
export default App