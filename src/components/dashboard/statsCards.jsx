import { AiOutlineGroup } from "react-icons/ai"; 
import { TbRoad } from "react-icons/tb"; 
import { RiTaxiFill } from "react-icons/ri"; 
import { Doughnut } from 'react-chartjs-2';
import { FaUser, FaRoute, FaBell, FaChartBar } from 'react-icons/fa';
import { useEffect, useState } from "react";
import axios from "axios";

const StatsCards = () => {
  const [isLoading, setisLoading] = useState(false);  
  const [stats, setstats] = useState([]); 

  const statsa = [
    { title: 'Users', value: `${stats.users}`, percentage: `${(stats.users*100)/100}`, icon: <FaUser />, bgColor: 'bg-blue-500' },
    { title: 'Trajets', value: `${stats.trajet}`, percentage: `${(stats.trajet*100)/100}`, icon: <FaRoute />, bgColor: 'bg-neutral-500' },
    { title: 'TaxiBe', value: `${stats.taxibe}`, percentage: `${(stats.taxibe*100)/100}`, icon: <RiTaxiFill />, bgColor: ' bg-orange-400' },
    { title: 'Route', value: `${stats.routes}`, percentage:`${(stats.routes*100)/100}`, icon: <TbRoad />, bgColor: 'bg-green-500' },
    { title: 'Cooperative', value: `${stats.cooperative}`, percentage: `${(stats.cooperative*100)/20}`, icon: <AiOutlineGroup />, bgColor: 'bg-violet-500' },
    { title: 'Notifications', value: 15, percentage: 30, icon: <FaBell />, bgColor: 'bg-yellow-500' },
    { title: 'Reports', value: 120, percentage: 90, icon: <FaChartBar />, bgColor: 'bg-red-500' },
  ];

  const getStats = async () =>{
    try {
      setisLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/stats/");
      setstats(response.data);
    } catch (e) {
      console.error("Erreur lors du chargement des statistiques:", e);
    }finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    getStats();
  }, []);
  

  const generateChartData = (percentage) => ({
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#0ef', '#ccc'],
        borderWidth: 0,
      },
    ],
  });

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
       {stats.length === 0  || isLoading ? <>
       <div className=" flex-row grid grid-cols-4 gap-6 p-6">
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
       </div>
       </>
        : (      
          statsa.map((stat, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-4 flex flex-col items-center ${stat.bgColor} text-white`}
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div className="w-32 h-32 relative mb-4">
                <Doughnut data={generateChartData(stat.percentage)} options={{ cutout: '70%' }} />
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                  {stat.percentage}%
                </div>
              </div>
              <h3 className="text-2xl font-semibold">{stat.value} {stat.title}</h3>
            </div>
          ))
        )}

    </div>
  );
};

export default StatsCards;