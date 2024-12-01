import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { useState } from 'react';


const ChartReservation = () => {
    const [view, setView] = useState('monthly');
  // Données des réservations par mois
  const dataMonthly = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: 'Réservations par Mois',
        data: [20, 45, 60, 80, 95, 100, 120, 140, 155, 180, 200, 220],
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  // Données des réservations par semaine (exemple sur 12 semaines)
  const dataWeekly = {
    labels: [' Lundi', 'Mardi ', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    datasets: [
      {
        label: 'Réservations par Semaine',
        data: [5, 8, 15, 20, 25, 28, 35, 40, 50, 55, 60, 75],  // Exemple de données
        borderColor: '#22C55E',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-semibold text-gray-800">Progression des Réservations</h2>
      <div>
        <button onClick={() => setView('monthly')} className="btn mr-2">Mois</button>
        <button onClick={() => setView('weekly')} className="btn">Semaine</button>
      </div>
    </div>
    <div className="h-64 md:h-80">
      {view === 'monthly' ? (
        <Line data={dataMonthly} options={options} />
      ) : (
        <Line data={dataWeekly} options={options} />
      )}
    </div>
  </div>
  );
};

export default ChartReservation;
