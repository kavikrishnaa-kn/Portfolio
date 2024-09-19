import Profilepic from '../assets/img/profile.jpg';
const Photo = () => {
    return(
    <>
    <div className="w-screen h-[85vh] flex">
        <div>
        <div className="h-[92vh] w-[40vw] flex items-center justify-end" >
      <img src= {Profilepic} alt="pic" className="h-[50vh] w-[50vh] flex rounded-[50vh] shadow-slate-500 shadow-2xl drop-shadow-2xl" ></img>
    </div>
        </div>
      <div className="h-[92vh] w-[60vw] flex flex-col items-center justify-center gap-4">
      <div className="text-2xl font-">Hello Everyone</div>
      <div className="text-2xl">It's Me</div>
      <div className="text-5xl">Kavi Krishnaa K N</div>
      </div>
      </div>
    
    </>
    )
}
export default Photo;