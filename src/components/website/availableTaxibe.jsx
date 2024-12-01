import { useState } from 'react';

const AvailableTaxibe = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [alert, setAlert] = useState(false);
  const seatRows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  const seatColumns = [1, 2, 3, 4];
  const maxSeats = 4;

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < maxSeats) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      setAlert(true);
      setTimeout(() => setAlert(false), 3000); // Alert disappears after 3 seconds
    }
  };

  const getFare = (seat) => {
    // Exemple de tarif : basé sur la rangée
    return seatRows.indexOf(seat[0]) < 3 ? 50 : 30;
  };

  const seatClass = (seat) => {
    return seatRows.indexOf(seat[0]) < 3 ? 'Premium' : 'Standard';
  };

  const confirmJourney = () => {
    alert(`Seats confirmed: ${selectedSeats.join(', ')}`);
  };

  return (
    <div className="container mx-auto pt-5 mb-5">
      <div className="flex justify-center">
        <div className="w-full md:w-9/12">
          <div className="bg-white p-5 shadow rounded-lg">
            <div className="flex flex-col md:flex-row">
              {/* Section de sélection des sièges */}
              <div className="w-full md:w-1/2 mb-5 md:mb-0">
                <h6 className="text-lg font-semibold mb-4">Sélectionner les sièges</h6>
                <div className="space-y-4">
                  {seatColumns.map((col) => (
                    <div key={col} className="flex justify-center space-x-2">
                      {seatRows.map((row) => {
                        const seat = `${row}${col}`;
                        return (
                          <button
                            key={seat}
                            onClick={() => handleSeatClick(seat)}
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              selectedSeats.includes(seat) ? 'bg-blue-500' : 'bg-gray-200'
                            } hover:bg-blue-300`}
                          >
                            <span className="text-sm font-bold">{seat}</span>
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
                {alert && (
                  <div className="mt-4 p-2 bg-red-100 text-red-600 border border-red-300 rounded">
                    Vous pouvez acheter seulement 4 sièges à la fois.
                  </div>
                )}
              </div>

              {/* Section des détails des sièges sélectionnés */}
              <div className="w-full md:w-1/2">
                <div className="overflow-auto">
                  <table className="w-full table-auto border-collapse">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="p-2 text-left">Sièges</th>
                        <th className="p-2 text-left">Tarif (€)</th>
                        <th className="p-2 text-left">Classe</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedSeats.map((seat) => (
                        <tr key={seat} className="border-t">
                          <td className="p-2">{seat}</td>
                          <td className="p-2">{getFare(seat)}</td>
                          <td className="p-2">{seatClass(seat)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-100 p-4 mt-4 rounded text-center font-bold">
                  Total : €{selectedSeats.reduce((total, seat) => total + getFare(seat), 0)}
                </div>
                <div className="mt-5">
                  <button
                    onClick={confirmJourney}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                  >
                    Confirmer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableTaxibe;
