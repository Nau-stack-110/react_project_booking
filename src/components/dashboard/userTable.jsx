import { useState } from 'react';
const usersData = [
  { id: 1, name: 'John Doe', address: '123 Main St', tel: '123-456-7890', date_inscrit: '2024-01-01' },
  { id: 2, name: 'Jane Smith', address: '456 Elm St', tel: '987-654-3210', date_inscrit: '2024-02-15' },
];

const UsersTable = () => {
  const [filter, setFilter] = useState('');
  
  // Filtrage basé sur le nom de l'utilisateur
  const filteredUsers = usersData.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Users List</h2>
      
      <input
        type="text"
        placeholder="Search by name..."
        className="mb-4 p-2 border rounded w-full md:w-1/3"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Address</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">Registered Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-200">
                <td className="py-3 px-4 border-b">{user.name}</td>
                <td className="py-3 px-4 border-b">{user.address}</td>
                <td className="py-3 px-4 border-b">{user.tel}</td>
                <td className="py-3 px-4 border-b">{user.date_inscrit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
