import Profilepic from '../assets/img/profile.jpg';
import Skill from '../components/Skill';
const Profile = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="h-[92vh] w-[40vw] flex items-center justify-end">
        <img src={Profilepic} alt="Profile" className="h-[50vh] w-[50vh] rounded-full shadow-blue-900 shadow-2xl" />
      </div>
      <div className="h-[92vh] w-[60vw] flex flex-col items-center justify-center gap-8">
        <div className="text-2xl">Hello Everyone</div>
        <div className="text-2xl">It's Me</div>
        <div className="text-5xl">Kavi Krishnaa K N</div>
        <div className="flex items-center justify-center">
        <Skill></Skill>
        </div>
      </div>
    </div>
  );
};

export default Profile;
