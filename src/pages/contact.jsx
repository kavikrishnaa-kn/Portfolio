import { Grid, Linkedin, LinkedinIcon, Mail, MessageCircle, MessageCircleHeart, MessageCircleIcon, MessageCircleReplyIcon, MessageCircleXIcon, Phone, PhoneCall, Share } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
    return (
      <div className='h-screen w-screen flex items-center justify-center'>
        <div className="h-[40vh] w-[20vw] bg-gradient-to-r from-blue-900 to-indigo-800   shadow-slate-800 shadow-lg rounded-md flex flex-col items-center justify-center rounded-xl">
            <div className="h-1/2 w-full flex">
              <div className="w-1/2 h-full flex items-center justify-center">
                  <a href="https://www.linkedin.com/in/k-n-kavi-krishnaa-454634277" target="_blank" className="text-gray-200">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />

                  </a>
              </div>
              <div className="w-1/2 h-full flex items-center justify-center">
              <a href="tel:7339661945" className="text-gray-200">
              <PhoneCall></PhoneCall>
                  </a>
              </div>
            </div>
            <div className="h-1/2 w-full flex">
            <div className="w-1/2 h-full flex items-center justify-center">
              <a href="mailto:knkavikrishnaa19@gmail.com" className="text-gray-200">
                   
                    <Mail></Mail>
                  </a>
                </div>
            <div className="w-1/2 h-full flex items-center justify-center">
              <a href="https://wa.me/7339661945" target="_blank" className="text-gray-200">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x"></FontAwesomeIcon>
                  </a>
                </div>
            </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  