import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from './authUser'; 
import Swal from 'sweetalert2';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Le nom d’utilisateur est requis.';
    if (!formData.email.trim()) newErrors.email = 'L’email est requis.';
    if (!formData.password) newErrors.password = 'Le mot de passe est requis.';
    if(formData.password.length < 8) newErrors.password = 'Le mot de passe doit etre au moins 8 caractères.';
    if (formData.password !== formData.password2) newErrors.password2 = 'Les mots de passe ne correspondent pas.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      const response = await registerUser(formData);
      console.log('Utilisateur inscrit avec succès :', response.data);
      Swal.fire({
        title: 'Inscription réussie!! \n Veuillez connecter maintenant',
        icon:'success',
        toast:'true',
        timer:'6000',
        position:'top-right',
        timerProgressBase:true,
        showConfirmButton:false,
      })
      navigate('/login');
    } catch (error) {
      console.error('Erreur d\'inscription :', error.response.data);
      Swal.fire({
        title: 'Echec d\'inscription!!',
        icon:'error',
        toast:'true',
        timer:'6000',
        position:'top-right',
        timerProgressBase:true,
        showConfirmButton:false,
      })
    }
  }
};

  return (
    <div className="flex items-center pt-8 justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Account</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Entrez votre nom d'utilisateur"
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Entrez votre email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div className='flex justify-between gap-x-2'>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Password </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Entrez votre mot de passe"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Confirm Password</label>
              <input
                type="password"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none ${
                  errors.password2 ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Confirmez votre mot de passe"
              />
              {errors.password2 && (
                <p className="text-red-500 text-sm mt-1">{errors.password2}</p>
              )}
            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            S&apos;inscrire
          </button>
        </form>

        <p className="mt-4 text-gray-600 text-center">
          Vous avez déjà un compte ?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
