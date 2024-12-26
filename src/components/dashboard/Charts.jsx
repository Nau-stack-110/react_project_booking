import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { 
  FiUsers, 
  FiMap, 
  FiTruck, 
  FiBriefcase,
  FiCalendar,
  FiBookmark,
  FiEye,
  FiBell,
  FiCheck
} from 'react-icons/fi';

// Enregistrer les composants Chart.js nécessaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Statistics() {
  // État pour gérer les coopératives visibles
  const [selectedCoops, setSelectedCoops] = useState({
    Kofimanga: true,
    Soatrans: true,
    Kofififi: true
  });

  // Données des coopératives avec 12 mois
  const coopsData = {
    Kofimanga: {
      data: [65, 78, 90, 85, 95, 110, 105, 115, 108, 98, 92, 120],
      color: '#FC3D32'
    },
    Soatrans: {
      data: [45, 55, 65, 75, 70, 85, 80, 90, 85, 75, 70, 95],
      color: '#007E3A'
    },
    Kofififi: {
      data: [30, 40, 45, 50, 55, 60, 58, 65, 70, 62, 55, 75],
      color: '#FFB612'
    }
  };

  // Labels des mois
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  // Version courte des mois pour mobile
  const shortMonths = [
    'Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun',
    'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'
  ];

  // Données statistiques
  const stats = [
    { title: 'Utilisateurs', value: 1234, icon: FiUsers, color: 'from-red-500 to-red-600' },
    { title: 'Routes', value: 45, icon: FiMap, color: 'from-green-500 to-green-600' },
    { title: 'Taxibes', value: 89, icon: FiTruck, color: 'from-red-500 to-green-500' },
    { title: 'Coopératives', value: 12, icon: FiBriefcase, color: 'from-green-600 to-red-500' },
    { title: 'Trajets', value: 156, icon: FiCalendar, color: 'from-red-400 to-green-400' },
    { title: 'Réservations', value: 789, icon: FiBookmark, color: 'from-green-400 to-red-400' },
    { title: 'Visiteurs', value: 2345, icon: FiEye, color: 'from-red-500 to-green-500' },
    { title: 'Notifications', value: 23, icon: FiBell, color: 'from-green-500 to-red-500' },
  ];

  // Données du graphique filtrées avec les nouveaux labels
  const chartData = {
    labels: window.innerWidth > 640 ? months : shortMonths,
    datasets: Object.entries(coopsData)
      .filter(([name]) => selectedCoops[name])
      .map(([name, data]) => ({
        label: name,
        data: data.data,
        borderColor: data.color,
        tension: 0.4,
        backgroundColor: data.color + '20',
        fill: true
      }))
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Évolution des réservations par coopérative',
        font: {
          size: 16,
          weight: 'bold',
        },
        padding: 20
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: window.innerWidth > 640 ? 12 : 10
          }
        }
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: window.innerWidth > 640 ? 12 : 10
          },
          maxRotation: 45,
          minRotation: 45
        }
      },
    },
  };

  return (
    <div className="space-y-6 p-4">
      {/* Stats Cards Grid optimisé pour mobile */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-2 sm:p-4 hover:shadow-lg 
                transition-all duration-300 transform hover:scale-102"
            >
              {/* Version mobile */}
              <div className="sm:hidden flex flex-col items-center justify-center">
                <div className={`p-2 rounded-full bg-gradient-to-r ${stat.color} mb-1`}>
                  <Icon className="text-white" size={16} />
                </div>
                <p className="text-lg font-bold text-center bg-gradient-to-r bg-clip-text 
                  text-transparent from-red-500 to-green-500"
                >
                  {stat.value >= 1000 ? `${(stat.value / 1000).toFixed(1)}k` : stat.value}
                </p>
              </div>

              {/* Version desktop */}
              <div className="hidden sm:flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent
                    from-red-500 to-green-500"
                  >
                    {stat.value.toLocaleString()}
                  </p>
                </div>
                <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color}`}>
                  <Icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filtres optimisés pour mobile */}
      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
        <h3 className="text-lg font-semibold mb-3 hidden sm:block">Filtrer par coopérative</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {Object.entries(coopsData).map(([name, data]) => (
            <button
              key={name}
              onClick={() => setSelectedCoops(prev => ({
                ...prev,
                [name]: !prev[name]
              }))}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 
                rounded-lg text-sm sm:text-base transition-all duration-300 ${
                selectedCoops[name]
                  ? 'bg-gradient-to-r from-red-500 to-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" 
                style={{ backgroundColor: data.color }} 
              />
              <span className="hidden sm:inline">{name}</span>
              <span className="sm:hidden">{name.substring(0, 3)}</span>
              {selectedCoops[name] && <FiCheck size={14} className="sm:hidden" />}
              {selectedCoops[name] && <FiCheck size={16} className="hidden sm:block" />}
            </button>
          ))}
        </div>

        {/* Légende responsive */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm">
          {Object.entries(coopsData)
            .filter(([name]) => selectedCoops[name])
            .map(([name, data]) => (
              <div key={name} className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" 
                  style={{ backgroundColor: data.color }} 
                />
                <span className="text-gray-600">
                  <span className="hidden sm:inline">{name}: </span>
                  <span>{Math.max(...data.data)}</span>
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Chart avec nouvelle configuration */}
      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
        <div className="h-[350px] sm:h-[500px]"> {/* Hauteur ajustée pour accommoder les labels */}
          <Line 
            data={chartData} 
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                title: {
                  ...chartOptions.plugins.title,
                  display: window.innerWidth > 640,
                }
              }
            }} 
          />
        </div>
      </div>
    </div>
  );
} 