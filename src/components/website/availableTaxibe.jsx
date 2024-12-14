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

  useEffect(() =>{
    const fetchTaxiBe = async () => {
      try{
        const response = await axios.get("http://localhost:8000/api/available_taxibe/", {
          params: { from: fromCity, to: toCity, date: travelDate },
        });
        console.log(response.data);
        setTaxiBes(response.data);
        setloading(false);
      }catch (e){
        seterror("Erreur lors de la récuperation des taxibes.", e);
        setloading(false);
      }
    };
    fetchTaxiBe();
  }, [fromCity, toCity, travelDate]);

  if (loading) return <p>Loading....</p>
  if (error) return <p> {error} </p>


  return (
    <>
    <div className="flex-1 justify-center items-center p-5 ">
       <h2 className="mt-16 ">Resultats : </h2>
       <div>

       { taxibes.length > 0 ? (
         taxibes.map((taxibe) => (
            <div key={taxibe.id} className="flex justify-between items-center mb-4 p-3 mx-0 border-[#ccc] border-[1px] border-solid">
              <img src={`http://localhost:8000/${taxibe.taxibe.photo}`} 
              alt={`Taxibe - ${taxibe.taxibe.marque}`} 
              className="w-16 h-16 object-cover" />
              <p>marque : {taxibe.taxibe.marque}</p>
              <p>matricule: {taxibe.taxibe.matricule}</p>
              <p>chauffeur: {taxibe.taxibe.chauffeur}</p>
              <p>places dispo : {taxibe.place_dispo} </p>
            </div>
         ))
        ) : (
          <div>
            <p>Aucun Taxibe disponible pour ce trajet.</p>
            <button onClick={() => navigate("/")} className="text-blue-600 mt-2 " >Retour à la recherche</button>
          </div>
        )
      }
              <button onClick={() => navigate("/")} className="text-blue-600 mt-2 "> Retour à la recherche </button>
       </div>
     </div>
    </>

  );
};


export default AvailableTaxibe;
