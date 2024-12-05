import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify'; 

const TaxibeCards = () => {
  const [taxibes, setTaxibes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTaxibe, setCurrentTaxibe] = useState(null); // Taxibe à modifier ou ajouter

  const [formData, setFormData] = useState({
    marque: '',
    chauffeur: '',
    matricule: '',
    cooperative: '',
    nb_place:'',
    photo: null, 
  });

  const getTaxibe = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://127.0.0.1:8000/api/taxibe/");
      setTaxibes(response.data);
    } catch (e) {
      console.error("Erreur lors du chargement des taxibes:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTaxibe();
  }, []);

  // Ouvrir le modal pour ajout/édition
  const openModal = (taxibe = null) => {
    if (taxibe) {
      setCurrentTaxibe(taxibe);
      setFormData({
        marque: taxibe.marque,
        chauffeur: taxibe.chauffeur,
        matricule: taxibe.matricule,
        cooperative: taxibe.cooperative,
        nb_place: taxibe.nb_place,
        photo: taxibe.photo, 
      });
    } else {
      setCurrentTaxibe(null);
      setFormData({
        marque: '',
        chauffeur: '',
        matricule: '',
        cooperative: '',
        nb_place: '',
        photo: null,
      });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentTaxibe(null);
    setModalOpen(false);
  };

  // Gérer la modification des champs de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Gérer l'upload de fichier pour la photo
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {   
      setFormData((prevState) => ({
        ...prevState,
        photo: file,
      }));
    }
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      if (currentTaxibe) {
        const response = await axios.put(`http://127.0.0.1:8000/api/taxibe/${currentTaxibe.id}/`, formDataToSend);
        setTaxibes(taxibes.map(taxibe => taxibe.id === currentTaxibe.id ? response.data : taxibe));
        toast.success("Taxibe mis à jour avec succès !");
      } else {
        // Create
        const response = await axios.post("http://127.0.0.1:8000/api/taxibe/", formDataToSend);
        setTaxibes([...taxibes, response.data]);
        toast.success("Nouveau taxibe ajouté !");
      }
      closeModal();
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      toast.error("Une erreur est survenue.");
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">Taxibes</h2>
        <button onClick={() => openModal()} className="bg-green-500 text-white px-4 py-2 rounded flex items-center hover:bg-green-600">
          <FaPlus className="mr-2" /> Ajouter Taxibe
        </button>
      </div>

      {/* Liste des taxibes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {taxibes.length === 0 ? 'Il n\'y pas des taxibes pour le moment ' : (<>  
        {isLoading ? ("Loading...") : (
          taxibes.map((taxibe) => (
            <div key={taxibe.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={taxibe.photo} alt={taxibe.marque} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{taxibe.marque} - {taxibe.nb_place}</h3>
                <p className="text-gray-600">Chauffeur: {taxibe.chauffeur}</p>
                <p className="text-gray-600">Matricule: {taxibe.matricule}</p>
                <p className="text-gray-600">Coopérative: {taxibe.cooperative}</p>
              </div>
              <div className="flex justify-between p-4 border-t">
                <button onClick={() => openModal(taxibe)} className="text-blue-500 hover:text-blue-700 flex items-center">
                  <FaEdit className="mr-1" /> Modifier
                </button>
                <button className="text-red-500 hover:text-red-700 flex items-center">
                  <FaTrashAlt className="mr-1" /> Supprimer
                </button>
              </div>
            </div>
          ))
        )}
        </>) }
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">{currentTaxibe ? 'Modifier Taxibe' : 'Ajouter Taxibe'}</h2>
            <form onSubmit={handleSubmit}>
              {/* Champs du formulaire */}
              <div className="mb-4">
                <label className="block text-gray-700">Marque</label>
                <input type="text" name="marque" value={formData.marque} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Chauffeur</label>
                <input type="text" name="chauffeur" value={formData.chauffeur} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Nb_place</label>
                <input type="text" name="nb_place" value={formData.nb_place} onChange={handleChange}className="w-full px-4 py-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Matricule</label>
                <input type="text" name="matricule" value={formData.matricule} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Coopérative</label>
                <input type="text" name="cooperative" value={formData.cooperative} onChange={handleChange} className="w-full px-4 py-2 border rounded" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Photo</label>
                <input type="file" onChange={handlePhotoChange} className="w-full px-4 py-2 border rounded" />
              </div>

              <div className="flex justify-end">
                <button type="button" onClick={closeModal} className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Annuler</button>
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxibeCards;

























