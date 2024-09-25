import {} from 'lucide-react';

const About = () => {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="h-[70vh] w-[80vw] bg-gray-300 rounded-xl shadow-inner shadow-blue-900 flex-col">
          <div className="h-1/3 w-full flex flex-col items-center justify-center gap-3">
            <h1 className="font-bold">Who Am I?</h1>
            <p className="text-center">I am an enthusiast seeking for Knowledge and Skills in everything around me.As a person willing to contribute for the society, I am working in developing my skills and seeking the purpose of my life.</p>
          </div>
          <div className="h-1/3 w-full bg-pink-400 flex">
          <div className="bg-blue-600 h-full w-1/3"></div>
          <div className="h-full w-full bg-red-700"></div>
          </div>
          <div className="h-1/3 w-full bg-pink-400 flex">
          <div className="bg-green-600 h-full w-1/3"></div>
          <div className="h-full w-full bg-orange-700"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  