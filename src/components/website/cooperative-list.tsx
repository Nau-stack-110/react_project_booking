import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Cooperative {
  id: number
  name: string
  taxibeCount: number
  priceRange: {
    normal: number
    vip: number
  }
  bio: string
  address: string
  image: string
}

const cooperatives: Cooperative[] = [
  {
    id: 1,
    name: "Coop Express",
    taxibeCount: 15,
    priceRange: { normal: 35000, vip: 50000 },
    bio: "Coop Express offre des services de qualité depuis 2010.",
    address: "123 Rue de l'Indépendance, Antananarivo",
    image: "/images/coop1.jpg"
  },
  {
    id: 2,
    name: "Mada Travel",
    taxibeCount: 10,
    priceRange: { normal: 30000, vip: 45000 },
    bio: "Mada Travel vous emmène partout à Madagascar en toute sécurité.",
    address: "45 Avenue de la Libération, Antsirabe",
    image: "/images/coop2.jpg"
  },
  {
    id: 3,
    name: "Tana Tours",
    taxibeCount: 20,
    priceRange: { normal: 38000, vip: 55000 },
    bio: "Voyagez confortablement avec Tana Tours.",
    address: "78 Boulevard de l'Europe, Antananarivo",
    image: "/images/coop3.jpg"
  },
  {
    id: 4,
    name: "Tana Tours",
    taxibeCount: 20,
    priceRange: { normal: 38000, vip: 55000 },
    bio: "Voyagez confortablement avec Tana Tours.",
    address: "78 Boulevard de l'Europe, Antananarivo",
    image: "/images/coop3.jpg"
  },
  {
    id: 5,
    name: "Tana Tours",
    taxibeCount: 20,
    priceRange: { normal: 38000, vip: 55000 },
    bio: "Voyagez confortablement avec Tana Tours.",
    address: "78 Boulevard de l'Europe, Antananarivo",
    image: "/images/coop3.jpg"
  },
  {
    id: 6,
    name: "Tana Tours",
    taxibeCount: 20,
    priceRange: { normal: 38000, vip: 55000 },
    bio: "Voyagez confortablement avec Tana Tours.",
    address: "78 Boulevard de l'Europe, Antananarivo",
    image: "/images/coop3.jpg"
  },
  {
    id: 7,
    name: "Soatrans",
    taxibeCount: 20,
    priceRange: { normal: 38000, vip: 55000 },
    bio: "Voyagez confortablement avec Tana Tours.",
    address: "78 Boulevard de l'Europe, Antananarivo",
    image: "/images/coop3.jpg"
  },
{
  id: 8,
  name: "Tana Tours",
  taxibeCount: 20,
  priceRange: { normal: 38000, vip: 55000 },
  bio: "Voyagez confortablement avec Tana Tours.",
  address: "78 Boulevard de l'Europe, Antananarivo",
  image: "/images/coop3.jpg"
},
  // ... ajout de 5 autres coopératives ...
]

export const CooperativeList = () => {
  const [nameFilter, setNameFilter] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  const [currentSlide, setCurrentSlide] = useState(0)
  const cardsPerSlide = 3

  // Logique de filtrage
  const filteredCooperatives = cooperatives.filter((coop) => {
    const nameMatch = coop.name.toLowerCase().includes(nameFilter.toLowerCase())
    const priceMatch = 
      priceFilter === 'all' ||
      (priceFilter === 'normal' && coop.priceRange.normal <= 40000) ||
      (priceFilter === 'vip' && coop.priceRange.vip <= 60000)
    return nameMatch && priceMatch
  })

  const totalSlides = Math.ceil(filteredCooperatives.length / cardsPerSlide)

  // Calculer les coopératives à afficher pour le slide actuel
  const getCurrentSlideCooperatives = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return filteredCooperatives.slice(startIndex, startIndex + cardsPerSlide);
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#007E3A]">
          Nos Coopératives Partenaires
        </h2>
        
        {/* Filtres */}
        <div className="mb-6 flex flex-wrap gap-4 justify-center">
          <input
            type="text"
            placeholder="Rechercher une coopérative"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007E3A] outline-none"
          />
          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#007E3A] outline-none"
          >
            <option value="all">Tous les prix</option>
            <option value="normal">Normal (≤ 40 000 Ar)</option>
            <option value="vip">VIP (≤ 60 000 Ar)</option>
          </select>
        </div>

        {/* Carrousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              {getCurrentSlideCooperatives().map((coop) => (
                <div 
                  key={coop.id} 
                  className="bg-white rounded-xl shadow-lg p-6 
                           transform transition-all duration-300 
                           hover:scale-105 hover:shadow-xl
                           flex flex-col justify-between
                           min-h-[400px]"
                >
                  <div>
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={coop.image} 
                        alt={coop.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#007E3A]">
                      {coop.name}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Nombre de TaxiBes : {coop.taxibeCount}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Prix : {coop.priceRange.normal.toLocaleString()} - 
                      {coop.priceRange.vip.toLocaleString()} Ar
                    </p>
                    <p className="text-gray-700 mb-4">{coop.bio}</p>
                  </div>
                  <p className="text-sm text-gray-500">{coop.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Boutons de navigation */}
          {currentSlide > 0 && (
            <button
              onClick={() => setCurrentSlide((prev) => prev - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4
                       bg-white text-[#007E3A] p-3 rounded-full shadow-lg 
                       hover:bg-[#007E3A] hover:text-white transition-all
                       focus:outline-none z-10"
              aria-label="Précédent"
            >
              <FaChevronLeft size={24} />
            </button>
          )}
          
          {currentSlide < totalSlides - 1 && (
            <button
              onClick={() => setCurrentSlide((prev) => prev + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4
                       bg-white text-[#007E3A] p-3 rounded-full shadow-lg 
                       hover:bg-[#007E3A] hover:text-white transition-all
                       focus:outline-none z-10"
              aria-label="Suivant"
            >
              <FaChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Indicateurs de slide */}
        <div className="flex justify-center mt-8 gap-3">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 
                ${currentSlide === index 
                  ? 'bg-[#007E3A] scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
