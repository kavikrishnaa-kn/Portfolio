import Profilepic from '../assets/img/profile.jpg';
const Photo = () => {
    return(
    <>
<div className="h-[92vh] w-[40vw] flex items-center justify-end bg-slate-700" >
      <img src= {Profilepic} alt="pic" className="h-[50vh] w-[50vh] flex rounded-[50vh]" ></img>
    </div>
    </>
    )
}
export default Photo;