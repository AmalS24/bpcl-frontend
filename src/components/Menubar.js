
import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import bpcl_logo from "../assets/bpcl.png";

const Menubar = () => {
 
  const nav = useNavigate()

  return (
    <div className="w-screen flex items-center px-6 pt-3 justify-between">
      <img className="w-14 " src={bpcl_logo} alt="bpcl-logo" />
      <div className="w-auto text-[14px] font-semibold flex h-auto p-1 gap-2">
        <img className="w-13 h-14 hidden sm:flex" src={avatar} alt="avatar"/>
        <div className="bg-white flex flex-col py-1 px-3 items-center justify-center rounded-md ">
          <p>23004</p>
          <p
            onClick={()=>{
              localStorage.removeItem('access_token')
              localStorage.removeItem('userId')
              localStorage.removeItem('userType')
              nav('/')
            }}
          >LOG OUT</p>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
