import { GiMonkFace } from "react-icons/gi"; 
import { FcSettings } from "react-icons/fc"; 
import { MdOutlinePowerSettingsNew } from "react-icons/md"; 
import { RiUserSearchFill } from "react-icons/ri"; 
import { MdTune } from "react-icons/md"; 
import { MdFileCopy } from "react-icons/md"; 
import { MdKeyboardArrowRight } from "react-icons/md"; 
import { AiOutlineDashboard } from "react-icons/ai"; 
import Dashboard2 from "./dashboard2";

const Dashboard1 = () => {
  return (
    <>
        <div className="flex flex-row pt-24 px-10 pb-4">
          <div className="w-2/12 mr-6">
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className=" float-left pr-2">
                 <AiOutlineDashboard />
                </span>
                Home
                <i className=" float-right">
                  <MdKeyboardArrowRight  />
                </i>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className=" float-left pr-2">
                  <MdTune />
                </span>
                Some menu
                <i className=" float-right">
                  <MdKeyboardArrowRight />
                </i>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className=" float-left pr-2">
                  <MdFileCopy />
                </span>
                Copyright
                <i className=" float-right">
                    <MdKeyboardArrowRight />
                </i>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className=" float-left pr-2">
                  <RiUserSearchFill />
                </span>
                Users
                <i className=" float-right">
                    <MdKeyboardArrowRight />
                </i>
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className=" float-left pr-2">
                  <GiMonkFace />
                </span>
                Profile
                <i className=" float-right">
                <MdKeyboardArrowRight />
                </i>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className=" float-left pr-2">
                  <FcSettings />
                </span>
                Settings
                <i className=" float-right">
                <MdKeyboardArrowRight />
                </i>
              </a>
              <a
                href=""
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className=" float-left pr-2">
                  <MdOutlinePowerSettingsNew />
                </span>
                Log out
                <i className=" float-right">
                <MdKeyboardArrowRight />
                </i>
              </a>
            </div>
          </div>
            <Dashboard2/>
        </div>
    </>
  )
}

export default Dashboard1
