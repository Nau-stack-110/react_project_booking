import axios from 'axios';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { 
  FiPlus, 
  FiEdit2, 
  FiTrash2, 
  FiX, 
  FiSearch,
  FiShield,
  FiUsers
} from 'react-icons/fi';

export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all'); // 'all', 'admin', 'normal', 'coop_admin'
  const [users, setUsers] = useState([]);
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    is_admin_coop: false,
  });

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // Nombre d'utilisateurs par page

  const getUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/users/");
      setUsers(response.data);
    } catch (e) {
      console.error("Erreur lors du chargement des utilisateurs:", e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setEditingUser(null);
    setFormData({
      username: '',
      email: '',
      is_admin_coop: false,
    });
  };

  const openEditModal = (user) => {
    setIsModalOpen(true);
    setEditingUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      is_admin_coop: user.is_admin_coop,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        const response = await axios.put(`http://127.0.0.1:8000/api/users/${editingUser.id}/`, formData);
        setUsers(users.map(user => (user.id === editingUser.id ? response.data : user)));
        Swal.fire({
          title: 'Utilisateur mise à jour avec success',
          icon:'success',
          toast:'true',
          timer:'6000',
          position:'top-right',
          timerProgressBase:true,
          showConfirmButton:false,
        })
      } else {
        const response = await axios.post("http://127.0.0.1:8000/api/users/", formData);
        setUsers([...users, response.data]);
        Swal.fire({
          title: 'Utilisateur crée avec success',
          icon:'success',
          toast:'true',
          timer:'6000',
          position:'top-right',
          timerProgressBase:true,
          showConfirmButton:false,
        })
      }
      closeModal();
      await getUsers();
    } catch (e) {
      console.error("Erreur lors de la soumission du formulaire:", e);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/users/${id}/`);
        setUsers(users.filter(user => user.id !== id));
        Swal.fire({
          title: 'Utilisateur supprimer avec success',
          icon:'success',
          toast:'true',
          timer:'6000',
          position:'top-right',
          timerProgressBase:true,
          showConfirmButton:false,
        })
      } catch (e) {
        console.error("Erreur lors de la suppression de l'utilisateur:", e);
      }
    }
  };

  // Filtrer les utilisateurs par rôle
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.username.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || 
      (roleFilter === 'admin' && user.is_superuser) || 
      (roleFilter === 'coop_admin' && user.is_admin_coop) || 
      (roleFilter === 'normal' && !user.is_superuser && !user.is_admin_coop);
    return matchesSearch && matchesRole;
  });

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Ajout d'une constante pour le nombre d'utilisateurs filtrés
  const filteredUsersCount = filteredUsers.length;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-800">Gestion des Utilisateurs</h1>
        <button
          onClick={openModal}
          className="px-4 py-2 bg-gradient-to-r from-red-600 to-green-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-semibold"
        >
          <div className="flex items-center space-x-2">
            <FiPlus size={20} />
            <span>Nouvel Utilisateur</span>
          </div>
        </button>
      </div>

      {/* Search and Role Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un utilisateur..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
              focus:ring-green-500 focus:border-transparent transition-all duration-300"
          />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2
             text-sm text-gray-500">
            {filteredUsersCount} résultat(s)
          </span>
        </div>

        {/* Role Filter */}
        <select 
          value={roleFilter} 
          onChange={(e) => setRoleFilter(e.target.value)} 
          className="border border-gray-300 rounded-lg p-2"
        >
          <option value="all">Tous les utilisateurs</option>
          <option value="admin">Admins</option>
          <option value="coop_admin">Coop Admins</option>
          <option value="normal">Utilisateurs Normaux</option>
        </select>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-black uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Nom d&apos;utilisateur</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Rôle</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal">
            {currentUsers.map((user) => (
              <tr key={user.id} className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-6 flex items-center">
                  {user.is_superuser && <FiShield className="text-red-500 mr-2" />}
                  {user.is_admin_coop && <FiUsers className="text-green-500 mr-2" />}
                  {user.username}
                </td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6">
                  {user.is_superuser ? 'Super Admin' : user.is_admin_coop ? 'Admin Coop' : 'Normal'}
                </td>
                <td className="py-3 px-6 flex space-x-2">
                  <button onClick={() => openEditModal(user)} className="text-blue-500 hover:underline">
                    <FiEdit2 /> 
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="text-red-500 hover:underline">
                    <FiTrash2 /> 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all duration-300"
        >
          Précédent
        </button>
        <span className="text-gray-700">Page {currentPage} sur {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all duration-300"
        >
          Suivant
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {editingUser ? 'Modifier l\'Utilisateur' : 'Nouvel Utilisateur'}
              </h2>
              <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <FiX size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom d&apos;utilisateur</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="is_admin_coop"
                    checked={formData.is_admin_coop}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Admin Coop
                </label>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-2 px-4 bg-gradient-to-r from-red-500 to-green-500 
                    text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {editingUser ? 'Modifier' : 'Créer'}
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