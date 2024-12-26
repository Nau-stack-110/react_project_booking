import axios from 'axios';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { 
  FiPlus, 
  FiEdit2, 
  FiTrash2, 
  FiX, 
  FiSearch,
  FiMapPin,
  FiMap,
  FiFilter
} from 'react-icons/fi';
import { HiArrowLongRight  } from 'react-icons/hi2';

export default function Routes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRoute, setEditingRoute] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all', 'depart', 'arrival'

  // Données des routes
  const [routes, setRoutes] = useState([]);
  
  const [formData, setFormData] = useState({
    ville_depart: '',
    ville_arrive: ''
  });

  const getRoute = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/route/");
      setRoutes(response.data);
    } catch (e) {
      console.error("Erreur lors du chargement des routes:", e);
    }
  };

  useEffect(() => {
    getRoute();
  }, []);

  // Filtre amélioré avec gestion des données manquantes
  const filteredRoutes = routes.filter(route => {
    const searchLower = searchTerm.toLowerCase();
    const matchDepart = route.ville_depart && route.ville_depart.toLowerCase().includes(searchLower);
    const matchArrive = route.ville_arrive && route.ville_arrive.toLowerCase().includes(searchLower);
    switch (filterType) {
      case 'depart':
        return matchDepart;
      case 'arrival':
        return matchArrive;
      default:
        return matchDepart || matchArrive;
    }
  });

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce route ?')) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/route/${id}/`);
        setRoutes(routes.filter(route => route.id !== id));
        Swal.fire({
          title: 'Route supprimer avec success',
          icon:'success',
          toast:'true',
          timer:'6000',
          position:'top-right',
          timerProgressBase:true,
          showConfirmButton:false,
        })
      } catch (e) {
        console.error("Erreur lors de la suppression du route:", e);
      }
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setEditingRoute(null);
    setFormData({
      ville_depart: '',
      ville_arrive: ''
    });
  };

  const openEditModal = (route) => {
    setIsModalOpen(true);
    setEditingRoute(route);
    setFormData({
      ville_depart: route.ville_depart || '',
      ville_arrive: route.ville_arrive || ''
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingRoute(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      if (editingRoute) {
        const response = await axios.put(`http://127.0.0.1:8000/api/route/${editingRoute.id}/`, formDataToSend);
        setRoutes(routes.map(route => 
          route.id === editingRoute.id ? response.data : route));
          Swal.fire({
            title: 'Route mise à jour avec success',
            icon:'success',
            toast:'true',
            timer:'6000',
            position:'top-right',
            timerProgressBase:true,
            showConfirmButton:false,
          })
      } else {
        const response = await axios.post("http://127.0.0.1:8000/api/route/", formDataToSend);
        setRoutes([...routes, response.data]);
        Swal.fire({
          title: 'Route créé avec success',
          icon:'success',
          toast:'true',
          timer:'6000',
          position:'top-right',
          timerProgressBase:true,
          showConfirmButton:false,
        })
      }
      closeModal();
      await getRoute();
    } catch (e) {
      console.error("Erreur lors de la soumission du formulaire:", e);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Gestion des Routes
        </h1>
        <button
          onClick={openModal}
          className="px-4 py-2 bg-gradient-to-r from-red-600 to-green-600 
            text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
            transform hover:scale-105 font-semibold"
        >
          <div className="flex items-center space-x-2">
            <FiPlus size={20} />
            <span>Nouvelle Route</span>
          </div>
        </button>
      </div>

      {/* Search avec Filtres */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={`Rechercher ${filterType === 'depart' ? 'une ville de départ' : 
              filterType === 'arrival' ? 'une ville d\'arrivée' : 'une ville'}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
              focus:ring-green-500 focus:border-transparent transition-all duration-300"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
            {filteredRoutes.length} résultat(s)
          </span>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              filterType === 'all' 
                ? 'bg-gradient-to-r from-red-500 to-green-500 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center space-x-2">
              <FiFilter size={16} />
              <span>Tout</span>
            </div>
          </button>
          <button
            onClick={() => setFilterType('depart')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              filterType === 'depart' 
                ? 'bg-gradient-to-r from-red-500 to-green-500 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center space-x-2">
              <FiMapPin size={16} />
              <span>Départs</span>
            </div>
          </button>
          <button
            onClick={() => setFilterType('arrival')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              filterType === 'arrival' 
                ? 'bg-gradient-to-r from-red-500 to-green-500 text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center space-x-2">
              <FiMapPin size={16} />
              <span>Arrivées</span>
            </div>
          </button>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredRoutes.map((route) => (
          <div
            key={route.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl 
              transition-all duration-300 transform hover:scale-102"
          >
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <FiMap className="text-red-500" size={20} />
                  <span className="font-semibold text-gray-700">Route {route.id}</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => openEditModal(route)}
                    className="p-1.5 bg-white rounded-full shadow-md hover:shadow-lg
                      transition-all duration-300 text-blue-500 hover:bg-blue-50"
                  >
                    <FiEdit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(route.id)}
                    className="p-1.5 bg-white rounded-full shadow-md hover:shadow-lg
                      transition-all duration-300 text-red-500 hover:bg-red-50"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="relative flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-2 flex-1">
                  <FiMapPin className="text-green-500" size={18} />
                  <span className="text-sm font-medium truncate">{route.ville_depart || 'N/A'}</span>
                </div>
                <div className="flex-shrink-0 relative w-12 h-px bg-gradient-to-r from-green-500 to-red-500">
                  <HiArrowLongRight  
                    className="absolute -top-2 right-0 text-gray-600" 
                    size={20}
                  />
                </div>
                <div className="flex items-center space-x-2 flex-1 text-right">
                  <span className="text-sm font-medium truncate">{route.ville_arrive || 'N/A'}</span>
                  <FiMapPin className="text-red-500" size={18} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4 transform transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {editingRoute ? 'Modifier la route' : 'Nouvelle route'}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FiX size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ville de départ
                </label>
                <input
                  type="text"
                  name='ville_depart'
                  value={formData.ville_depart}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ville d&apos;arrivée
                </label>
                <input
                  type="text"
                  name='ville_arrive'
                  value={formData.ville_arrive}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-2 px-4 bg-gradient-to-r from-red-500 to-green-500 
                    text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {editingRoute ? 'Modifier' : 'Créer'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg 
                    hover:bg-gray-200 transition-all duration-300"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
} 