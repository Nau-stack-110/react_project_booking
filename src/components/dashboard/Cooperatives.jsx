import { useState, useEffect } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Cooperatives() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCoop, setEditingCoop] = useState(null);
  
  const [cooperatives, setCooperatives] = useState([]);
  const [admins, setAdmins] = useState([]);

  const getCooperative= async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/cooperative-admin/");
      setCooperatives(response.data);
    } catch (e) {
      console.error("Erreur lors du chargement des cooperatives:", e);
    }
  };

  const getAdmins = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/users/?is_admin_coop=True");
      setAdmins(response.data);
    } catch (e) {
      console.error("Erreur lors du chargement des admins:", e);
    }
  };

  useEffect(() => {
    getCooperative();
    getAdmins();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette coopérative ?')) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/cooperative-admin/${id}/`);
        setCooperatives(cooperatives.filter(cooperative => cooperative.id !== id));
        Swal.fire({
          title: 'Cooperative supprimer avec success',
          icon:'success',
          toast:'true',
          timer:'6000',
          position:'top-right',
          timerProgressBase:true,
          showConfirmButton:false,
        })
      } catch (e) {
        console.error("Erreur lors de la suppression du cooperative:", e);
      }
    }
  };

  const handleEdit = (coop) => {
    setEditingCoop(coop);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Gestion des Coopératives
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-green-500 
            text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <FiPlus size={20} />
          <span>Nouvelle Coopérative</span>
        </motion.button>
      </div>

      {/* Cooperatives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cooperatives.map((coop) => (
          <motion.div
            key={coop.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{coop.nom}</h3>
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleEdit(coop)}
                  className="p-2 text-blue-500 hover:bg-blue-50 rounded-full"
                >
                  <FiEdit2 size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDelete(coop.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                >
                  <FiTrash2 size={18} />
                </motion.button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-bold">Localisation:</span> {coop.adresse}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Contact:</span> {coop.contact}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Admin:</span> {coop.admin ? coop.admin.username : 'N/A'}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Admin (détails):</span> {admins.find(admin => admin.id === coop.admin?.id)?.username || 'N/A'}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 bg-black bg-opacity-50"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative z-50"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {editingCoop ? 'Modifier la Coopérative' : 'Nouvelle Coopérative'}
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <FiX size={20} />
                  </button>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom de la coopérative
                    </label>
                    <input
                      type="text"
                      defaultValue={editingCoop.nom}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                        focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Localisation
                    </label>
                    <input
                      type="text"
                      defaultValue={editingCoop.adresse}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                        focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact
                    </label>
                    <input
                      type="number"
                      defaultValue={editingCoop.contact}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                        focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 py-2 px-4 bg-gradient-to-r from-red-500 to-green-500 
                        text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {editingCoop ? 'Modifier' : 'Créer'}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg 
                        hover:bg-gray-200 transition-all duration-300"
                    >
                      Annuler
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
} 