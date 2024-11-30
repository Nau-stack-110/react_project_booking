import { GiAntiAircraftGun } from "react-icons/gi"; 
import { SiGunicorn } from "react-icons/si"; 
import { GiSawedOffShotgun } from "react-icons/gi"; 

const Dashboard2 = () => {
  return (
      <section className="w-10/12">
             <div className="flex flex-row h-64 mt-6">
              <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12 relative text-center">
                Users
                <i className=" text-[90px] rounded-md text-blue-600 absolute top-1/2 right-1/2 transform -translate-y-1/2 ">  <GiAntiAircraftGun /> </i>
              </div>
              <div className="bg-white rounded-xl shadow-lg mx-6 px-6 py-4 w-4/12 relative text-center">
                Comments
                <i className="text-[90px] absolute top-1/2 right-1/2 rounded-md text-blue-600 transform -translate-y-1/2"> <SiGunicorn /> </i>
              </div>
              <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12 relative text-center">
                Bookings  
                <i className=" text-[90px] rounded-md text-blue-600 absolute top-1/2 right-1/2 transform -translate-y-1/2"> <GiSawedOffShotgun /> </i>
              </div>
            </div>
      </section>
  )
}

export default Dashboard2
