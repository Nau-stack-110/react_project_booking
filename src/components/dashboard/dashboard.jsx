import Dashboard1 from "./dashboard1";

const Dashboard = () => {
  return (
    <>
      <div className="bg-orange-100 min-h-screen">
        <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
          <div className="flex items-center justify-between py-2 text-5x1">
            <div className="font-bold text-blue-900 text-xl">
              Admin<span className="text-orange-600">Panel</span>
            </div>
            <div className="flex items-center text-gray-500">
              <a
                className="p-2 cursor-pointer"
              >
                search
              </a>
              <a
                className="p-2 cursor-pointer"
              >
                classic
              </a>
              <a
                className="p-2 cursor-pointer"
              >
                notifications
              </a>
              <div
                className="bg-center bg-gray-500 bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2">
              </div>
            </div>
          </div>
        </div>
        <Dashboard1/>
      </div> 
    </>
  );
};

export default Dashboard;
