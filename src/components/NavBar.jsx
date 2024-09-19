import { CircleUser } from 'lucide-react';
const Nav = () => {
    return(
        <>
    <div className="h-[8vh] w-screen flex flex-row bg-[#133a35] rounded-md gap-[50vw]">
        <div className="w-[50vw] h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center font-extrabold font-serif text-gray-50 text-[3vh]">
                KAVI KRISHNAA K N
            </div>
        </div>
        <div className="w-1/2 h-auto flex items-center justify-center gap-6">
            <button type="button" className= "h-[6vh] w-[5vw] bg-[#C4DAD2] rounded-[1vh] text-lg text-emerald-950 font-bold font-serif">Profile</button>
            <button type="button" className="h-[6vh] w-[5vw] bg-[#C4DAD2] rounded-[1vh]  text-lg  text-emerald-950 font-bold font-serif">Projects</button>
            <button type="button" className="h-[6vh] w-[5vw] bg-[#C4DAD2] rounded-[1vh]  text-lg text-emerald-950 font-bold font-serif">Contact</button>
            <CircleUser className= "h-[6vh] w-[3vw] text-[#C4DAD2] rounded-[50rem]" />
        </div>
    </div>
    </>
    )
}

export default Nav;