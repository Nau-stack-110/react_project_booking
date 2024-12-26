import axios from 'axios';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiX, FiCalendar } from 'react-icons/fi';

const Trajets = () => {
  const [trajets, setTrajets] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [taxibes, setTaxibes] = useState([]);

  const [formData, setFormData] = useState({
    taxibe: '',
    route: '',
    date: '',
    place_dispo: '',
  });
  const [editingTrajet, setEditingTrajet] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterDate, setFilterDate] = useState('');
  const [filterRoute, setFilterRoute] = useState('');
  const [filterPlaceDispo, setFilterPlaceDispo] = useState('');

  const getTrajets = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/trajet/");
      setTrajets(response.data);
    } catch (e) {
      console.error("Erreur lors du chargement des trajets:", e);
    }
  };

  const getTaxibe = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/taxibeget/");
      setTaxibes(response.data);
    } catch (e) {
      console.error("Erreur lors du chargement des taxibes:", e);
    }
  };

  const getRoute = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/route/");
      setRoutes(response.data);
    } catch (e) {
      console.error("Erreur lors du chargement des routes:", e);
    }
  };

  const deleteOldTrajets = async () => {
    const today = new Date();
    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(today.getDate() - 10);

    const oldTrajets = trajets.filter(trajet => new Date(trajet.date) < tenDaysAgo);

    for (const trajet of oldTrajets) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/trajet2/${trajet.id}/`);
      } catch (e) {
        console.error("Erreur lors de la suppression du trajet:", e);
      }
    }

    // Mettre à jour l'état après la suppression
    setTrajets(prev => prev.filter(trajet => new Date(trajet.date) >= tenDaysAgo));
  };

  useEffect(() => {
    getTrajets();
    getRoute();
    getTaxibe();
    deleteOldTrajets();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setEditingTrajet(null);
    setFormData({ taxibe: '', route: '', date: '', place_dispo: '' });
  };

  const openEditModal = (trajet) => {
    setIsModalOpen(true);
    setEditingTrajet(trajet);
    setFormData({
      taxibe: trajet.taxibe.id,
      route: trajet.route.id,
      date: trajet.date,
      place_dispo: trajet.place_dispo,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTrajet(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingTrajet ? `http://127.0.0.1:8000/api/trajet2/${editingTrajet.id}/` : "http://127.0.0.1:8000/api/trajet2/";
      const method = editingTrajet ? axios.put : axios.post;
      const response = await method(url, formData);
      setTrajets(prev => editingTrajet ? prev.map(trajet => (trajet.id === editingTrajet.id ? response.data : trajet)) : [...prev, response.data]);
      Swal.fire('Trajet ' + (editingTrajet ? 'mis à jour' : 'créé') + ' avec succès', '', 'success');
      closeModal();
      await getTrajets();
    } catch (e) {
      console.error("Erreur lors de la soumission du formulaire:", e);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce trajet ?')) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/trajet2/${id}/`);
        setTrajets(trajets.filter(trajet => trajet.id !== id));
        Swal.fire('Trajet supprimé avec succès', '', 'success');
      } catch (e) {
        console.error("Erreur lors de la suppression du trajet:", e);
      }
    }
  };

  // Filtrer les trajets
  const filteredTrajets = trajets.filter(trajet => {
    const matchesDate = filterDate ? trajet.date === filterDate : true;
    const matchesRoute = filterRoute ? trajet.route.id === parseInt(filterRoute) : true;
    const matchesPlaceDispo = filterPlaceDispo ? trajet.place_dispo >= parseInt(filterPlaceDispo) : true;
    return matchesDate && matchesRoute && matchesPlaceDispo;
  });

  const filterByDate = (days) => {
    const today = new Date();
    const targetDate = new Date();
    targetDate.setDate(today.getDate() + days);
    setFilterDate(targetDate.toISOString().split('T')[0]); // Format YYYY-MM-DD
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-2xl font-semibold text-gray-800">Gestion des Trajets</h1>
      <button onClick={openModal} className="px-4 py-2 bg-gradient-to-r from-red-600 to-green-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold">
        <div className="flex items-center space-x-2">
          <FiPlus size={20} />
          <span>Nouveau Trajet</span>
        </div>
      </button>

      {/* Bouton de filtrage par date */}
      <div className="flex gap-4">
        <button onClick={() => filterByDate(-1)} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg">
          <FiCalendar className="mr-2" /> Hier
        </button>
        <button onClick={() => filterByDate(0)} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg">
          <FiCalendar className="mr-2" /> Aujourd&apos;hui
        </button>
        <button onClick={() => filterByDate(1)} className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg">
          <FiCalendar className="mr-2" /> Demain
        </button>
      </div>

      {/* Filtres */}
      <div className="flex gap-4 flex-wrap">
        <select value={filterDate} onChange={(e) => setFilterDate(e.target.value)} className="border border-gray-300 rounded-lg p-2 flex-1">
          <option value="">Filtrer par date</option>
          {Array.from(new Set(trajets.map(trajet => trajet.date))).map(date => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>
        <select value={filterRoute} onChange={(e) => setFilterRoute(e.target.value)} className="border border-gray-300 rounded-lg p-2 flex-1">
          <option value="">Filtrer par route</option>
          {routes.map(route => (
            <option key={route.id} value={route.id}>{route.ville_depart} à {route.ville_arrive}</option>
          ))}
        </select>
        <input type="number" placeholder="Min. places dispo" value={filterPlaceDispo} onChange={(e) => setFilterPlaceDispo(e.target.value)} className="border border-gray-300 rounded-lg p-2 flex-1" />
      </div>

      {/* Affichage des trajets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredTrajets.sort((a, b) => new Date(b.date) - new Date(a.date)).map(trajet => (
          <div key={trajet.id} className="border p-4 rounded-lg shadow-md mb-4 flex flex-col sm:flex-row justify-between items-center bg-gray-100 hover:bg-gray-200 transition duration-300">
            <span>{trajet.route.ville_depart} à {trajet.route.ville_arrive} - {trajet.date} - {trajet.place_dispo} places</span>
            <div className="flex space-x-2 mt-2">
              <button onClick={() => openEditModal(trajet)} className="text-blue-500 hover:underline">
                <FiEdit2 />
              </button>
              <button onClick={() => handleDelete(trajet.id)} className="text-red-500 hover:underline">
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Indicateur de filtre appliqué */}
      {filterDate && (
        <div className="bg-yellow-200 p-2 rounded-lg mb-4">
          <span>Filtre appliqué : Date - {filterDate}</span>
        </div>
      )}
      {filterRoute && (
        <div className="bg-yellow-200 p-2 rounded-lg mb-4">
          <span>Filtre appliqué : Route - {routes.find(route => route.id === parseInt(filterRoute))?.ville_depart} à {routes.find(route => route.id === parseInt(filterRoute))?.ville_arrive}</span>
        </div>
      )}
      {filterPlaceDispo && (
        <div className="bg-yellow-200 p-2 rounded-lg mb-4">
          <span>Filtre appliqué : Minimum {filterPlaceDispo} places disponibles</span>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">{editingTrajet ? 'Modifier le Trajet' : 'Nouveau Trajet'}</h2>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FiX size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <select name="taxibe" value={formData.taxibe} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2" required>
                <option value="">Sélectionner un Taxibe</option>
                {taxibes.map(taxibe => <option key={taxibe.id} value={taxibe.id}>{taxibe.marque}- N°{taxibe.matricule}</option>)}
              </select>

              <select name="route" value={formData.route} onChange={handleChange} className="w-full border border-gray-300 rounded-lg p-2" required>
                <option value="">Sélectionner une Route</option>
                {routes.map(route => <option key={route.id} value={route.id}>{route.ville_depart} à {route.ville_arrive}</option>)} 
              </select>

              <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2" />
              
              <input type="number" name="place_dispo" value={formData.place_dispo} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2" />
              
              <button type="submit" className="flex-1 py-2 px-4 bg-gradient-to-r from-red-500 to-green-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                {editingTrajet ? 'Modifier' : 'Créer'}
              </button>
              <button type="button" onClick={closeModal} className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-300">
                Annuler
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trajets;
