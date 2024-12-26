import { useState } from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import { useNavigate, useLocation } from 'react-router-dom';

const SelectSeats = () => {
  const location = useLocation();
  const { totalPlaces, marque } = location.state;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const maxSeats = 4;
  const navigate = useNavigate();

  const vehicleConfig = {
    type: marque,
    totalSeats: totalPlaces,
    layout: Array.from({ length: totalPlaces }, (_, i) => i + 1),
  };

  const reservedSeats = [];

  const handleSeatClick = (seatNumber) => {
    if (seatNumber === 1) return;
    if (reservedSeats.includes(seatNumber)) return;
    
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNumber));
    } else if (selectedSeats.length < maxSeats) {
      setSelectedSeats([...selectedSeats, seatNumber]);
    } else {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const getSeatColor = (seatNumber) => {
    if (seatNumber === 1) return 'bg-red-500';
    if (reservedSeats.includes(seatNumber)) return 'bg-green-500';
    if (selectedSeats.includes(seatNumber)) return 'bg-blue-500 text-white';
    return 'bg-gray-200';
  };

  const handleBookSeat = () => {
    navigate('/book-seat', { state: { selectedSeats } });
  };

  const totalPrice = selectedSeats.length * 10;

  return (
    <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row">
      <div className="w-full md:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Sièges Sélectionnés</h3>
          {selectedSeats.length > 0 ? (
            <div>
              <ul className="space-y-2">
                {selectedSeats.map((seat) => (
                  <li key={seat} className="flex justify-between bg-gray-100 p-2 rounded">
                    <span>Siège n°{seat}</span>
                    <span>10 €</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t pt-2">
                <p className="font-bold">Prix Total: {totalPrice} €</p>
              </div>
            </div>
          ) : (
            <p>Aucun siège sélectionné</p>
          )}
        </div>
      </div>

      <div className="w-full md:w-2/3 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 mt-10">
          {vehicleConfig.type} - {vehicleConfig.totalSeats} places
        </h2>

        <div className="grid grid-cols-4 gap-4">
          {vehicleConfig.layout.map((seatNumber) => (
            <button
              key={seatNumber}
              onClick={() => handleSeatClick(seatNumber)}
              className={`
                w-12 h-12 rounded-lg flex items-center justify-center
                ${getSeatColor(seatNumber)}
                transition-all duration-200
                ${seatNumber === 1 ? 'cursor-not-allowed' : 'hover:opacity-80'}
              `}
            >
              {seatNumber === 1 ? (
                <GiSteeringWheel className="text-white text-xl" />
              ) : (
                <span className="font-bold">{seatNumber}</span>
              )}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleBookSeat}
            disabled={selectedSeats.length === 0}
          >
            Réserver
          </button>
        </div>

        {showAlert && (
          <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg">
            Maximum {maxSeats} sièges autorisés
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectSeats;



















