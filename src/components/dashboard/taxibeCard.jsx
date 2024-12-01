import { useState } from 'react';
import { FaPlus, FaEdit, FaTrashAlt } from 'react-icons/fa';

const TaxibeCards = () => {
  const [taxibes, setTaxibes] = useState([
    { id: 1, name: 'TaxiBe 001', marque: 'Toyota', matricule: 'ABC-123', date_creation: '2023-01-15', cooperative: 'Coopérative A', image: '/slider.jpg' },
    { id: 2, name: 'TaxiBe 002', marque: 'Nissan', matricule: 'DEF-456', date_creation: '2023-03-22', cooperative: 'Coopérative B', image: '/slider.jpg' },
    { id: 3, name: 'TaxiBe 002', marque: 'Nissan', matricule: 'DEF-456', date_creation: '2023-03-22', cooperative: 'Coopérative B', image: '/slider.jpg' },
    { id: 4, name: 'TaxiBe 002', marque: 'Nissan', matricule: 'DEF-456', date_creation: '2023-03-22', cooperative: 'Coopérative C', image: '/slider.jpg' },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentTaxibe, setCurrentTaxibe] = useState(null); // Taxibe à modifier ou ajouter
  const [formData, setFormData] = useState({
    name: '',
    marque: '',
    matricule: '',
    cooperative: '',
    image: '',
  });

  // Ouvrir le modal pour ajout/édition
  const openModal = (taxibe = null) => {
    if (taxibe) {
      setCurrentTaxibe(taxibe);
      setFormData({
        name: taxibe.name,
        marque: taxibe.marque,
        matricule: taxibe.matricule,
        cooperative: taxibe.cooperative,
        image: taxibe.image,
      });
    } else {
      setCurrentTaxibe(null);
      setFormData({
        name: '',
        marque: '',
        matricule: '',
        cooperative: '',
        image: '',
      });
    }
    setModalOpen(true);
  };

  // Fermer le modal
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

  // Gérer l'upload de fichier pour l'image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Utiliser une URL locale pour prévisualiser l'image
      const imageUrl = URL.createObjectURL(file);
      setFormData((prevState) => ({
        ...prevState,
        image: imageUrl,
      }));
    }
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTaxibe) {
      // Mettre à jour un taxibe existant
      setTaxibes(taxibes.map((taxibe) =>
        taxibe.id === currentTaxibe.id ? { ...taxibe, ...formData } : taxibe
      ));
    } else {
      // Ajouter un nouveau taxibe
      setTaxibes([
        ...taxibes,
        { id: taxibes.length + 1, ...formData, date_creation: new Date().toLocaleDateString() },
      ]);
    }
    closeModal();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">Taxibes</h2>
        <button onClick={() => openModal()} className="bg-green-500 text-white px-4 py-2 rounded flex items-center hover:bg-green-600">
          <FaPlus className="mr-2" /> Add Taxibe
        </button>
      </div>

      {/* Liste des taxibes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {taxibes.map((taxibe) => (
          <div key={taxibe.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={taxibe.image} alt={taxibe.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{taxibe.name}</h3>
              <p className="text-gray-600">Marque: {taxibe.marque}</p>
              <p className="text-gray-600">Matricule: {taxibe.matricule}</p>
              <p className="text-gray-600">Créé le: {taxibe.date_creation}</p>
              <p className="text-gray-600">Coopérative: {taxibe.cooperative}</p>
            </div>
            <div className="flex justify-between p-4 border-t">
              <button onClick={() => openModal(taxibe)} className="text-blue-500 hover:text-blue-700 flex items-center">
                <FaEdit className="mr-1" /> Edit
              </button>
              <button className="text-red-500 hover:text-red-700 flex items-center">
                <FaTrashAlt className="mr-1" /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">{currentTaxibe ? 'Edit Taxibe' : 'Add Taxibe'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Marque</label>
                <input
                  type="text"
                  name="marque"
                  value={formData.marque}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Matricule</label>
                <input
                  type="text"
                  name="matricule"
                  value={formData.matricule}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Coopérative</label>
                <input
                  type="text"
                  name="cooperative"
                  value={formData.cooperative}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 border rounded"
                />
                {formData.image && (
                  <div className="mt-2">
                    <img src={formData.image} alt="Preview" className="w-full h-40 object-cover" />
                  </div>
                )}
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={closeModal} className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxibeCards;
