import { CircleUser } from 'lucide-react';
const Nav = () => {
    return(
        <>
    <div className="h-[8vh] w-screen flex flex-row bg-[#16423C]  gap-[50vw]">
        <div className="w-[50vw] h-full flex items-center justify-center">
        <div className="w-auto h-auto flex items-center justify-center font-extrabold font-serif text-gray-50">
            <h1> KAVI KRISHNAA K N</h1>
            </div>
        </div>
        <div className="w-1/2 h-auto flex items-center justify-center gap-6">
            <button type="button" className= "h-[6vh] w-[5vw] bg-[#C4DAD2] shadow-md shadow-slate-300 rounded-[1vh] text-[1vw] text-emerald-950 font-bold font-serif hover:bg-[#c4dad29e]">Profile</button>
            <button type="button" className= "h-[6vh] w-[5vw] bg-[#C4DAD2] shadow-md shadow-slate-300 rounded-[1vh] text-[1vw] text-emerald-950 font-bold font-serif hover:bg-[#c4dad29e] ">Projects</button>
            <button type="button" className="button" className= "h-[6vh] w-[5vw] bg-[#C4DAD2] shadow-md shadow-slate-300 rounded-[1vh] text-[1vw] text-emerald-950 font-bold font-serif hover:bg-[#c4dad29e] ">Contact</button>
            <CircleUser className= "h-[6vh] w-[3vw] text-[#C4DAD2] rounded-[50rem]" />
        </div>
    </div>
    </>
    )
}

export default Nav;