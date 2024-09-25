import { CircleUser } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const Nav = () => {
  return (
    <div className="h-[8vh] w-screen flex flex-row bg-gradient-to-r from-blue-900 to-indigo-800 gap-[50vw]  shadow-slate-800 shadow-lg rounded-md">
      <div className="w-[50vw] h-full flex items-center justify-center">
        <h1 className="font-extrabold font-serif text-gray-50">KAVI KRISHNAA K N</h1>
      </div>
      <div className="w-1/2 h-auto flex items-center justify-center gap-6">
        <Link to="/" className="h-[6vh] w-[5vw] flex items-center justify-center shadow-lg rounded text-[1vw] text-white font-bold  hover:bg-white hover:text-blue-700 hover:text-md" >
          Profile
        </Link>
        <Link to="/about" className="h-[6vh] w-[5vw] flex items-center justify-center shadow-lg rounded text-[1vw] text-white font-bold  hover:bg-white hover:text-blue-700 hover:text-md">
        About me
        </Link>
        <Link to="/contacts" className="h-[6vh] w-[5vw] flex items-center justify-center shadow-lg rounded text-[1vw] text-white font-bold  hover:bg-white hover:text-blue-700 hover:text-md">
          Contact
        </Link>
        <CircleUser className="h-[6vh] w-[3vw] text-[white] rounded-full hover:rounded-[50%]  hover:bg-white hover:text-blue-700" />
      </div>
    </div>
  );
};

export default Nav;
