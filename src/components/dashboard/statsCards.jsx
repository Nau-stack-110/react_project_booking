import { Doughnut } from 'react-chartjs-2';
import { FaUser, FaRoute, FaBell, FaChartBar } from 'react-icons/fa';

const StatsCards = () => {
  // Données fictives pour les statistiques
  const stats = [
    { title: 'Total Users', value: 1200, percentage: 75, icon: <FaUser />, bgColor: 'bg-blue-500' },
    { title: 'Total Trajets', value: 340, percentage: 50, icon: <FaRoute />, bgColor: 'bg-green-500' },
    { title: 'Notifications', value: 58, percentage: 30, icon: <FaBell />, bgColor: 'bg-yellow-500' },
    { title: 'Reports Generated', value: 25, percentage: 90, icon: <FaChartBar />, bgColor: 'bg-red-500' },
  ];

  // Fonction pour générer les données du graphique
  const generateChartData = (percentage) => ({
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ['#ffffff', '#cccccc'],
        borderWidth: 0,
      },
    ],
  });

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`rounded-lg shadow-lg p-4 flex flex-col items-center ${stat.bgColor} text-white`}
        >
          <div className="text-4xl mb-4">{stat.icon}</div>
          <div className="w-32 h-32 relative mb-4">
            <Doughnut data={generateChartData(stat.percentage)} options={{ cutout: '70%' }} />
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
              {stat.percentage}%
            </div>
          </div>
          <h3 className="text-2xl font-semibold">{stat.value}</h3>
          <p className="text-lg">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;













// import { FaUser, FaRoute, FaBell, FaChartBar } from 'react-icons/fa';

// const StatsCards = () => {
//   // Données fictives pour les statistiques
//   const stats = [
//     { title: 'Total Users', value: 1200, icon: <FaUser />, bgColor: 'bg-blue-500' },
//     { title: 'Total Trajets', value: 340, icon: <FaRoute />, bgColor: 'bg-green-500' },
//     { title: 'Notifications', value: 58, icon: <FaBell />, bgColor: 'bg-yellow-500' },
//     { title: 'Reports Generated', value: 25, icon: <FaChartBar />, bgColor: 'bg-red-500' },
//   ];

//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {stats.map((stat, index) => (
//         <div
//           key={index}
//           className={`rounded-lg shadow-lg p-6 flex items-center ${stat.bgColor} text-white`}
//         >
//           <div className="text-4xl mr-4">
//             {stat.icon}
//           </div>
//           <div>
//             <h3 className="text-2xl font-semibold">{stat.value}</h3>
//             <p className="text-lg">{stat.title}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatsCards;
