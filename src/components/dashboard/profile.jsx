import { useState } from 'react';
import { FaUser, FaLock, FaPhone, FaEnvelope, FaUserPlus, FaCamera } from 'react-icons/fa';
import { MdEdit, MdLocationOn, MdSecurity, MdDashboard } from 'react-icons/md';
import io from "../../assets/Linux.png";
const Profile = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Partie gauche - Informations de profil */}
                <div className="lg:col-span-4">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        {/* Cover Image */}
                        <div className="relative h-40 bg-gradient-to-r from-red-600 to-green-600">
                            <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                                <FaCamera className="text-gray-600 text-lg" />
                            </button>
                        </div>

                        {/* Profile Info Container */}
                        <div className="px-6 pb-6">
                            {/* Avatar Container */}
                            <div className="flex flex-col items-center -mt-20">
                                <div className="relative inline-block">
                                    <img 
                                        src={io} 
                                        alt="Admin" 
                                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                                    />
                                    <button className="absolute bottom-2 right-2 p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors shadow-lg">
                                        <MdEdit size={16} />
                                    </button>
                                </div>

                                {/* User Info */}
                                <div className="text-center mt-4 space-y-2">
                                    <h1 className="text-2xl font-bold text-gray-800">Rakoto Jean</h1>
                                    <p className="text-green-600 font-semibold text-lg">Super Admin</p>
                                    <p className="text-gray-600 text-sm max-w-xs">
                                        Gestionnaire principal de la plateforme
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation - Mise à jour du style */}
                    <div className="mt-6 bg-white rounded-xl shadow-md p-4">
                        <nav className="space-y-2">
                            <button 
                                onClick={() => setActiveTab('profile')}
                                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                                    activeTab === 'profile' 
                                    ? 'bg-green-50 text-green-600 font-medium' 
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                <MdDashboard className="mr-3" size={20} />
                                Mon Profil
                            </button>
                            <button 
                                onClick={() => setActiveTab('security')}
                                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                                    activeTab === 'security' 
                                    ? 'bg-green-50 text-green-600 font-medium' 
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                <MdSecurity className="mr-3" size={20} />
                                Sécurité
                            </button>
                            <button 
                                onClick={() => setActiveTab('new-admin')}
                                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                                    activeTab === 'new-admin' 
                                    ? 'bg-green-50 text-green-600 font-medium' 
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                <FaUserPlus className="mr-3" size={20} />
                                Nouvel Admin
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Partie droite - Contenu des onglets */}
                <div className="lg:col-span-8">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        {activeTab === 'profile' && (
                            <form className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-slideDown">
                                    Informations Personnelles
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 transform transition duration-300 hover:scale-[1.02]">
                                        <label className="text-sm font-medium text-gray-700 animate-fadeIn">
                                            Nom complet
                                        </label>
                                        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 focus-within:bg-white">
                                            <FaUser className="text-gray-400 mr-3 transition-colors group-hover:text-green-500" />
                                            <input 
                                                type="text" 
                                                className="bg-transparent w-full focus:outline-none transition-all duration-300"
                                                placeholder="Nom complet" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 transform transition duration-300 hover:scale-[1.02]">
                                        <label className="text-sm font-medium text-gray-700">Email</label>
                                        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 focus-within:bg-white">
                                            <FaEnvelope className="text-gray-400 mr-3 transition-colors group-hover:text-green-500" />
                                            <input 
                                                type="email" 
                                                className="bg-transparent w-full focus:outline-none transition-all duration-300"
                                                placeholder="Email" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Téléphone</label>
                                        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2">
                                            <FaPhone className="text-gray-400 mr-3" />
                                            <input 
                                                type="tel" 
                                                className="bg-transparent w-full focus:outline-none"
                                                placeholder="Téléphone" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Adresse</label>
                                        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2">
                                            <MdLocationOn className="text-gray-400 mr-3" />
                                            <input 
                                                type="text" 
                                                className="bg-transparent w-full focus:outline-none"
                                                placeholder="Adresse" 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Bio</label>
                                    <textarea 
                                        className="w-full bg-gray-50 rounded-lg px-4 py-2 focus:outline-none"
                                        rows="4"
                                        placeholder="Bio"
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-red-500 text-white py-3 rounded-lg transform transition-all duration-300 hover:bg-red-600 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                >
                                    Mettre à jour
                                </button>
                            </form>
                        )}

                        {activeTab === 'security' && (
                            <form className="space-y-6 animate-fadeIn">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6 animate-slideDown">
                                    Sécurité
                                </h2>
                                <div className="space-y-4">
                                    <div className="space-y-2 transform transition duration-300 hover:scale-[1.02]">
                                        <label className="text-sm font-medium text-gray-700">
                                            Ancien mot de passe
                                        </label>
                                        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 focus-within:bg-white">
                                            <FaLock className="text-gray-400 mr-3 transition-colors group-hover:text-green-500" />
                                            <input 
                                                type="password" 
                                                className="bg-transparent w-full focus:outline-none transition-all duration-300"
                                                placeholder="Ancien mot de passe" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 transform transition duration-300 hover:scale-[1.02]">
                                        <label className="text-sm font-medium text-gray-700">
                                            Nouveau mot de passe
                                        </label>
                                        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 focus-within:bg-white">
                                            <FaLock className="text-gray-400 mr-3 transition-colors group-hover:text-green-500" />
                                            <input 
                                                type="password" 
                                                className="bg-transparent w-full focus:outline-none transition-all duration-300"
                                                placeholder="Nouveau mot de passe" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 transform transition duration-300 hover:scale-[1.02]">
                                        <label className="text-sm font-medium text-gray-700">
                                            Confirmer le mot de passe
                                        </label>
                                        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 focus-within:bg-white">
                                            <FaLock className="text-gray-400 mr-3 transition-colors group-hover:text-green-500" />
                                            <input 
                                                type="password" 
                                                className="bg-transparent w-full focus:outline-none transition-all duration-300"
                                                placeholder="Confirmer le mot de passe" 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-green-600 text-white py-3 rounded-lg transform transition-all duration-300 hover:bg-green-700 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                >
                                    Changer le mot de passe
                                </button>
                            </form>
                        )}

                        {activeTab === 'new-admin' && (
                            <form className="space-y-6 animate-fadeIn">
                                <div className="flex items-center space-x-3 mb-6 animate-slideDown">
                                    <FaUserPlus className="text-2xl text-green-600" />
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        Créer un nouvel administrateur
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 transform transition duration-300 hover:scale-[1.02]">
                                        <label className="text-sm font-medium text-gray-700 animate-fadeIn">
                                            Nom de l&apos;admin
                                        </label>
                                        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 focus-within:bg-white">
                                            <FaUser className="text-gray-400 mr-3 transition-colors group-hover:text-green-500" />
                                            <input 
                                                type="text" 
                                                className="bg-transparent w-full focus:outline-none transition-all duration-300"
                                                placeholder="Nom de l'admin" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 transform transition duration-300 hover:scale-[1.02]">
                                        <label className="text-sm font-medium text-gray-700 animate-fadeIn">
                                            Email
                                        </label>
                                        <div className="flex items-center bg-gray-50 rounded-lg px-4 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-green-500 focus-within:bg-white">
                                            <FaEnvelope className="text-gray-400 mr-3 transition-colors group-hover:text-green-500" />
                                            <input 
                                                type="email" 
                                                className="bg-transparent w-full focus:outline-none transition-all duration-300"
                                                placeholder="Email" 
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6 transform transition duration-300 hover:scale-[1.01]">
                                    <h3 className="font-semibold text-gray-800 mb-4">Permissions</h3>
                                    <div className="space-y-3">
                                        <label className="flex items-center space-x-3 transition-transform duration-200 hover:translate-x-2">
                                            <input 
                                                type="checkbox" 
                                                className="form-checkbox text-green-600 rounded transition-all duration-300 focus:ring-2 focus:ring-green-500"
                                            />
                                            <span>Gestion des utilisateurs</span>
                                        </label>
                                        <label className="flex items-center space-x-3 transition-transform duration-200 hover:translate-x-2">
                                            <input 
                                                type="checkbox" 
                                                className="form-checkbox text-green-600 rounded transition-all duration-300 focus:ring-2 focus:ring-green-500"
                                            />
                                            <span>Gestion des contenus</span>
                                        </label>
                                        <label className="flex items-center space-x-3 transition-transform duration-200 hover:translate-x-2">
                                            <input 
                                                type="checkbox" 
                                                className="form-checkbox text-green-600 rounded transition-all duration-300 focus:ring-2 focus:ring-green-500"
                                            />
                                            <span>Gestion des paramètres</span>
                                        </label>
                                        <label className="flex items-center space-x-3 transition-transform duration-200 hover:translate-x-2">
                                            <input 
                                                type="checkbox" 
                                                className="form-checkbox text-green-600 rounded transition-all duration-300 focus:ring-2 focus:ring-green-500"
                                            />
                                            <span>Gestion financière</span>
                                        </label>
                                    </div>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-green-600 text-white py-3 rounded-lg transform transition-all duration-300 hover:bg-green-700 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                >
                                    Créer l&apos;admin
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
