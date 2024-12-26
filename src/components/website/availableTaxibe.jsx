import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AvailableTaxibe = () => {
  const [taxibes, setTaxiBes] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const fromCity = query.get("from");
  const toCity = query.get("to");
  const travelDate = query.get("date");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTaxiBe = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/available_taxibe/", {
          params: { from: fromCity, to: toCity, date: travelDate },
        });
        setTaxiBes(response.data);
        setloading(false);
      } catch (e) {
        seterror("Erreur lors de la récupération des taxibes.", e);
        setloading(false);
      }
    };
    fetchTaxiBe();
  }, [fromCity, toCity, travelDate]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Résultats : Taxis Disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {taxibes.length > 0 ? (
          taxibes.map((taxibe) => (
            <div key={taxibe.id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col">
              <img
                src={`http://localhost:8000/${taxibe.taxibe.photo}`}
                alt={`Taxibe - ${taxibe.taxibe.marque}`}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="flex-grow p-2">
                <h3 className="text-lg font-semibold">{taxibe.taxibe.marque}</h3>
                <p>Matricule: {taxibe.taxibe.matricule}</p>
                <p>Chauffeur: {taxibe.taxibe.chauffeur}</p>
                <p>Place total: {taxibe.taxibe.nb_place} </p>
                <p>Places disponibles: {taxibe.place_dispo}</p>
              </div>
              <button
                onClick={() => navigate(`/select_seats?taxibeId=${taxibe.id}`, {
                  state: {
                    totalPlaces: taxibe.taxibe.nb_place,
                    availablePlaces: taxibe.place_dispo,
                    marque: taxibe.taxibe.marque
                  }
                })}
                className="bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                View and Book Seat
              </button>
            </div>
          ))
        ) : (
          <p>Aucun Taxibe disponible pour ce trajet.</p>
        )}
      </div>
    </div>
  );
};

export default AvailableTaxibe;
