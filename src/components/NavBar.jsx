

const Nav = () => {
    return(
        <>
    <div className="h-[8vh] w-screen flex flex-row bg-[#133a35] rounded-md gap-[50%]">
        <div className="w-1/2 h-auto bg-[ #73605B] flex items-center justify-center ">
        <div className="w-auto h-auto flex items-center justify-center font-bold text-gray-50 text-[150%]">
                KAVI KRISHNAA K N
            </div>
        </div>
        <div className="w-1/2 h-auto flex items-center gap-6">
            <button type="button" className= "h-[80%] w-[6rem] bg-[#C4DAD2] rounded-[2rem]">Profile</button>
            <button type="button" className="h-[80%] w-[6rem] bg-[#C4DAD2] rounded-[2rem]">Projects</button>
            <button type="button" className="h-[80%] w-[6rem] bg-[#C4DAD2] rounded-[2rem]">Contact</button>
        </div>
    </div>
    </>
    )
}

export default Nav;