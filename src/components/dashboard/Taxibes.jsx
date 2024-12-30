import axios from 'axios';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { 
  FiPlus, 
  FiEdit2, 
  FiTrash2, 
  FiX,
  FiSearch,
  FiTruck,
  FiUsers,
  FiHash,
  FiChevronDown
} from 'react-icons/fi';

export default function Taxibes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTaxibe, setEditingTaxibe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCooperative, setSelectedCooperative] = useState('');
  
  // Données étendues
  const [taxibes, setTaxibes] = useState([]);
  const [cooperative, setCooperative] = useState([]);
  
  // États pour le formulaire de création/édition
  const [formData, setFormData] = useState({
    marque: '',
    matricule: '',
    cooperative: '',
    chauffeur:'',
    nb_place: '',
    photo: null
  });
  
  // Récupérer les taxibes
  const getTaxibe = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/taxibeget/");
      setTaxibes(response.data);
    } catch (e) {
      console.error("Erreur lors du chargement des taxibes:", e);
    }
  };

  // Récupérer les coopératives
  const getCooperative = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/cooperative/");
      setCooperative(response.data);
    } catch (e) {
      console.error("Erreur lors du chargement des coopératives:", e);
    }
  };

  useEffect(() => {
    getTaxibe();
    getCooperative();
  }, []);

  // Filtre amélioré avec correction et filtre par coopérative
  const filteredTaxibes = taxibes.filter(taxibe => {
    const matchesSearchTerm = 
      (taxibe.marque && taxibe.marque.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (taxibe.matricule && taxibe.matricule.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (taxibe.cooperative.nom && taxibe.cooperative && taxibe.cooperative.nom.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCooperative = selectedCooperative ? taxibe.cooperative.id === Number(selectedCooperative) : true;

    return matchesSearchTerm && matchesCooperative;
  });

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce taxibe ?')) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/taxibe/${id}/`);
        setTaxibes(taxibes.filter(taxibe => taxibe.id !== id));
        Swal.fire({
          title: 'Taxibe supprimer avec success',
          icon:'success',
          toast:'true',
          timer:'6000',
          position:'top-right',
          timerProgressBase:true,
          showConfirmButton:false,
        })
      } catch (e) {
        console.error("Erreur lors de la suppression du taxibe:", e);
      }
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setEditingTaxibe(null);
    setFormData({
      marque: '',
      matricule: '',
      cooperative: '',
      chauffeur:'',
      nb_place: '',
      photo: null
    });
  };

  const openEditModal = (taxibe) => {
    setIsModalOpen(true);
    setEditingTaxibe(taxibe);
    setFormData({
      marque: taxibe.marque,
      matricule: taxibe.matricule,
      cooperative: taxibe.cooperative.id,
      chauffeur: taxibe.chauffeur,
      nb_place: taxibe.nb_place,
      photo: taxibe.photo
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTaxibe(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {   
      setFormData((prevState) => ({
        ...prevState,
        photo: file,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      if (editingTaxibe) {
        const response = await axios.put(`http://127.0.0.1:8000/api/taxibe/${editingTaxibe.id}/`, formDataToSend);
        setTaxibes(taxibes.map(taxibe => 
          taxibe.id === editingTaxibe.id ? response.data : taxibe));
          Swal.fire({
            title: 'TaxiBe mise à jour avec success',
            icon:'success',
            toast:'true',
            timer:'6000',
            position:'top-right',
            timerProgressBase:true,
            showConfirmButton:false,
          })
      } else {
        const response = await axios.post("http://127.0.0.1:8000/api/taxibe/", formDataToSend);
        setTaxibes([...taxibes, response.data]);
        console.log(response.data);
        Swal.fire({
          title: 'TaxiBe créé avec success',
          icon:'success',
          toast:'true',
          timer:'6000',
          position:'top-right',
          timerProgressBase:true,
          showConfirmButton:false,
        })
      }
      closeModal();
      await getTaxibe();
      await getCooperative();
    } catch (e) {
      console.error("Erreur lors de la soumission du formulaire:", e);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Gestion des Taxibes
        </h1>
        <button
          onClick={openModal}
          className="px-4 py-2 bg-gradient-to-r from-red-600 to-green-600 
            text-white rounded-lg shadow-lg hover:shadow-xl
            transition-all duration-300
            transform hover:scale-105 font-semibold"
        >
          <div className="flex items-center space-x-2">
            <FiPlus size={20} />
            <span>Nouveau Taxibe</span>
          </div>
        </button>
      </div>

      {/* Filtre par coopérative */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Filtrer par Coopérative
        </label>
        <select
          value={selectedCooperative}
          onChange={(e) => setSelectedCooperative(e.target.value)}
          className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
            focus:ring-green-500 focus:border-transparent transition-all duration-300"
        >
          <option value="">Toutes les coopératives</option>
          {cooperative.map((coop) => (
            <option key={coop.id} value={coop.id}>
              {coop.nom}
            </option>
          ))}
        </select>
        <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Search avec compteur */}
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher par marque, matricule, cooperative"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
            focus:ring-green-500 focus:border-transparent transition-all duration-300"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500">
          {filteredTaxibes.length} résultat(s)
        </span>
      </div>

      {/* Cards Grid - Ajusté pour 4 colonnes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTaxibes.map((taxibe) => (
          <div 
            key={taxibe.id} // Clé unique
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl 
              transition-all duration-300 transform hover:scale-102"
          >
            {/* Image */}
            <div className="relative h-40 bg-gray-200">
              <img
                src={taxibe.photo}
                alt={taxibe.marque}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 space-x-2">
                <button
                  onClick={() => openEditModal(taxibe)}
                  className="p-1.5 bg-white rounded-full shadow-md hover:shadow-lg
                    transition-all duration-300 text-blue-500
                    hover:bg-blue-50"
                >
                  <FiEdit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(taxibe.id)}
                  className="p-1.5 bg-white rounded-full shadow-md hover:shadow-lg
                    transition-all duration-300 text-red-500 hover:bg-red-50"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{taxibe.marque}</h3>
              <div className="space-y-1 text-sm">
                <div className="flex items-center text-gray-600">
                  <FiHash className="mr-1.5" size={14} />
                  <span>Matricule: {taxibe.matricule}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FiUsers className="mr-1.5" size={14} />
                  <span>Places: {taxibe.nb_place}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FiTruck className="mr-1.5" size={14} />
                  <span>Coop: {taxibe.cooperative.nom}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal pour créer/modifier un taxibe */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {editingTaxibe ? 'Modifier le Taxibe' : 'Nouveau Taxibe'}
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
                  Marque
                </label>
                <input
                  type="text"
                  name="marque"
                  value={formData.marque}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Matricule
                </label>
                <input
                  type="text"
                  name="matricule"
                  value={formData.matricule}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Chauffeur
                </label>
                <input
                  type="text"
                  name="chauffeur"
                  value={formData.chauffeur}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Coopérative
                </label>
                <select
                  name="cooperative"
                  value={formData.cooperative}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-green-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Sélectionner une coopérative</option>
                  {cooperative.map((coop) => (
                    <option key={coop.id} value={coop.id}>
                      {coop.nom}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre de places
                </label>
                <input
                  type="text"
                  name="nb_place"
                  value={formData.nb_place}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  onChange={handlePhotoChange}
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
                  {editingTaxibe ? 'Modifier' : 'Créer'}
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